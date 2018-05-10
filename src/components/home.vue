<template>
    <div class="home-bg">
        <div class="pg-home-header clearfix">
            <div class="header-left fl">
                <div class="header-pic fl">
                    <img src="../assets/images/pq-logo.png" class= "pic-auto" alt="">
                </div>
                <div  style="overflow:hidden;padding-left: .1rem;height: 100%;position: relative">
                    <div class="pic-name overflows">{{userInfo.realname}}</div>
                    <div class="recharge">
                        <span class="text-cz">{{userInfo.score}}</span>
                        <img class="img-cz" src="../assets/images/chongzhi.png" alt="">
                    </div>
                </div>

            </div>
            <div class="header-right fl">
                <div class="r-Personal fr">
                    <div class="Personal-pic">
                        <img  src="../assets/images/p-content.png" alt="" class="img">
                    </div>
                    <span class="pic-text">个人中心</span>
                </div>
                <!--<div class="r-recharge fl">-->
                    <!---->
                <!--</div>-->
            </div>
        </div>

        <div class="pg-home-con">
            <div class="con-start" @click="showStartRoom">
                <div class="start-con">
                    <div class="statr-pic fl">

                    </div>
                    <div class="people-text">
                        <div class="text-span">开设房间</div>
                    </div>
                </div>
            </div>

            <div class="con-tow" @click="quickJoinRoom()">
                <div class="tow-con">
                    <div class="tow-pic fl">

                    </div>
                    <div class="people-text">
                        <div class="text-span">快速加入</div>
                    </div>
                </div>
            </div>

            <div class="con-end">
                <div class="end-con">
                    <div class="end-pic fl">

                    </div>
                    <div class="people-text" style="padding-left: 0">
                        <div class="text-span">自由选房</div>
                    </div>
                </div>
            </div>

        </div>

        <div class="home-foot">
            <!--<div class="foot-icon"></div>-->
        </div>

        <cx-model :modes="modes" :isVisible="isVisible" @colsModel="colsModel">
            <div slot="content">
                <div  class="clearfix margin">
                    <div class="fl">
                        <span>房间人数：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="personNum" @on-change="changesPerson" type="radio">
                            <cx-checkbox label="9">
                                <span>9人</span>
                            </cx-checkbox>
                        </cx-checkbox-group>
                    </div>
                </div>
                <!--房间级别-->
                <div  class="clearfix margin" >
                    <div class="fl">
                        <span>级别：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="roomLevel" @on-change="changeScore" type="radio">
                            <cx-checkbox v-for="(item,index) in roomDj" :key="index" :label="item.level">
                                <span>{{item.name}}</span>
                            </cx-checkbox>
                        </cx-checkbox-group>

                    </div>
                </div>
                <!--下注分数-->
                <div  class="clearfix margin" >
                    <div class="fl" style="padding: .09rem 0">
                        <span>最低下注分数：</span>
                    </div>
                    <div class="fl" >
                        <input class="ScoreInput" type="number" v-model="minScore">
                    </div>
                </div>
                <div  class="clearfix margin" >
                    <div class="fl" >
                        <span>最高下注分数：</span>
                    </div>
                    <div class="fl">
                        <span>{{maxScore}}</span>
                        <!--<input class="ScoreInput" disabled="true" type="number" :value="maxScore">-->
                    </div>
                </div>
                <!--房间私密-->
                <div  class="clearfix margin">
                    <div class="fl">
                        <span>私密房间：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="passwordRoom" type="radio" @on-change="changePassword">
                            <cx-checkbox label="1">
                                <span>否</span>
                            </cx-checkbox>
                            <cx-checkbox label="2">
                                <span>是</span>
                            </cx-checkbox>
                        </cx-checkbox-group>
                    </div>
                </div>

                <div  v-if="isPassword" class="clearfix margin">
                    <div class="fl" style="padding: .09rem 0">
                        <span>房间密码：</span>
                    </div>
                    <div class="fl">
                        <input class="passwordInput" v-model="roomPassword" type="number" placeholder="请输入6位数字密码" >
                    </div>

                </div>


            </div>
        </cx-model>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo:Object,
                roomDj:Object,
                saveRooms:Object,
                account:null,
                roomLevelName:'初级房',
                personNum: '9',
                roomLevel: '1',
                levelRoom:'1',
                passwordRoom:'1',
                roomPassword:null,
                isPassword:false,
                maxScore:null,
                minScore:null,
                extractScore:null,
                roomId:null,
                modes:{
                    title:'创建房间',
                    btnCancelText:'取  消',
                    btnSaveText:'确 定',
                    type:'confirm',
                    class:'defind',
                    onCancel:()=> {
                        alert('点击了取消')
                    },
                    onOk:()=> {
                        let body = {
                            room:null,
                            roomNum:this.personNum,
                            minScore:this.minScore,
                            maxScore:this.maxScore,
                            roomLevel:this.levelRoom,
                            roomLevelName:this.roomLevelName,
                            account:this.account,
                            createBy:this.createBy,
                            isPrivate:this.passwordRoom,
                            password:this.roomPassword
                        }
                        this.$userService.saveRoomInfo(body).then(res=>{
                            console.log(res)
                            this.roomId = res.id;
                            // this.$router.push('/game/'+ this.roomId);
                            this.$router.push({path:'/game',query:res})
                        })

                    }

                },
                isVisible:false
            }
        },

        methods: {
            colsModel(item){
                this.isVisible = item.isOk;
            },
            showStartRoom() {
                this.isVisible = true;
                this.$userService.getRoomLevel('zhangsan').then(res=>{
                    console.log(res)
                    this.roomDj = res;
                    this.minScore = this.roomDj[0].minScore;
                    this.maxScore = this.roomDj[0].maxScore;
                    this.extractScore = this.roomDj[0].extractScore;

                })
            },
            changesPerson(i) {

            },
            changeScore(i) {
                this.levelRoom = parseInt(i);
                if( i === 1){
                    this.roomLevelName = '初级房'
                }else if( i === 2) {
                    this.roomLevelName = '中级房'
                } else {
                    this.roomLevelName = '高级房'
                }
                this.minScore = this.roomDj[i-1].minScore;
                this.maxScore = this.roomDj[i-1].maxScore;

            },
            changePassword(i) {
                if( i === '2' ){
                    this.isPassword = true;
                    this.passwordRoom = i;
                }else {
                    this.isPassword = false;
                    this.passwordRoom = i;
                }
            },
            quickJoinRoom() {
                this.$userService.qkJoinRoom(this.account).then(res=>{
                    console.log(res)
                    this.$router.push({path:'/game',query:res})
                })
            }
        },
        created() {
            //获取首页信息
            this.$userService.getUserInfo(123).then(res => {
                this.userInfo = res;
                this.account = res.account;
                this.createBy = res.id;
                console.log(res)
            });
        }
    }
</script>

<style scoped>

</style>
