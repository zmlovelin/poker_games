<template>
    <div class="home-bg">
        <div class="pg-home-header clearfix">
            <div class="header-left fl">
                <div class="header-pic fl" @click="handleClick">
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

            <div class="con-tow">
                <div class="tow-con">
                    <div class="tow-pic fl">

                    </div>
                    <div class="people-text">
                        <div class="text-span">快速匹配</div>
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
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
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
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
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
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>最低下注分数：</span>
                    </div>
                    <div class="fl">
                        <span>{{minScore}}</span>
                    </div>
                </div>
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>最高下注分数：</span>
                    </div>
                    <div class="fl">
                        <span>{{maxScore}}</span>
                    </div>
                </div>
                <!--房间私密-->
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>私密房间：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="passwordRoom" type="radio" @on-change="changePassword">
                            <cx-checkbox label="1">
                                <span>是</span>
                            </cx-checkbox>
                            <cx-checkbox label="0">
                                <span>否</span>
                            </cx-checkbox>
                        </cx-checkbox-group>
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
                personNum: '9',
                roomLevel: '1',
                passwordRoom:'0',
                maxScore:null,
                minScore:null,
                extractScore:null,
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
                            roomNum:9,
                            minScore:100,
                            maxScore:1000,
                            roomLevel:2,
                            roomLevelName:'hhh',
                            account:17,
                            createBy:1,
                            isPrivate:1,
                            password:null
                        }
                        this.$userService.saveRoomInfo(body).then(res=>{
                            console.log(res)
                        })

                    }

                },
                isVisible:false
            }
        },

        methods: {
            handleClick() {
                this.$router.push('/game')
            },
            colsModel(item){
                this.isVisible = item.isOk;
            },
            showStartRoom() {
                this.isVisible = true;
                this.$userService.getRoomLevel("17386040468").then(res=>{
                    this.roomDj = res;
                    this.minScore = this.roomDj[0].minScore;
                    this.maxScore = this.roomDj[0].maxScore;
                    this.extractScore = this.roomDj[0].extractScore;
                })
            },
            changesPerson(i) {

            },
            changeScore(i) {
                this.minScore = this.roomDj[i-1].minScore;
                this.maxScore = this.roomDj[i-1].maxScore;
            },
            changePassword(i) {

            }


        },
        created() {
            //获取首页信息
            this.$userService.getUserInfo(123).then(res => {
                this.userInfo = res;
            });
        }
    }
</script>

<style scoped>

</style>
