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

        <cx-modal :modes="modes" :isVisible="isVisible" @colsModel="colsModel">
            <div slot="content">
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>房间人数：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="personNum" @on-change="change" type="radio">
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
                        <cx-checkbox-group v-model="radioModel" @on-change="change" type="radio">
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
                        <span>{{radioModel}}</span>
                    </div>
                </div>
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>最高下注分数：</span>
                    </div>
                    <div class="fl">
                        <span>{{radioModel}}</span>
                    </div>
                </div>
                <!--房间私密-->
                <div  class="clearfix" style="margin: .2rem 0;color: #333;">
                    <div class="fl">
                        <span>私密房间：</span>
                    </div>
                    <div class="fl">
                        <cx-checkbox-group v-model="radioModel" type="radio">
                            <cx-checkbox label="zs">
                                <span>是</span>
                            </cx-checkbox>
                            <cx-checkbox label="1">
                                <span>否</span>
                            </cx-checkbox>
                        </cx-checkbox-group>
                    </div>
                </div>
            </div>
        </cx-modal>
    </div>
</template>

<script>
    import modal from '../shared/model'
    export default {
        data() {
            return {
                userInfo:Object,
                roomDj:Object,
                personNum: '9',
                saveRooms:Object,
                name:null,
                models: ['cj', 'zj'],
                radioModel: '1',
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
                        // alert('点击了确定')
                        this.saveRoom();
                    }

                },
                isVisible:false
            }
        },
        components: {
            'cx-modal': modal
        },
        methods: {
            handleClick() {
                this.$router.push('/game')
            },
            getUserInfo() {
                let url ="api/user/getUserInfo";
                let body = {
                    account : "zhangsan",
                }
                this.$http.post(url,body).then(success=>{
                    this.userInfo = JSON.parse(success.body.data);
                   console.log(JSON.parse(success.body.data));
                },error=>{

                })
            },
            getRoomdj() {
                let url ="api/user/getRoomLevel";
                let body = {
                    account : "17386040468",
                }
                this.$http.post(url,body).then(success=>{
                    this.roomDj = JSON.parse(success.body.data);
                    console.log(this.roomDj);
                },error=>{

                })
            },

            saveRoom() {
                let url ="api/user/saveRoomInfo";
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
                this.$http.post(url,body).then(success=>{
                    this.saveRooms = JSON.parse(success.body.data);
                    console.log(success.body);
                },error=>{

                })
            },

            showStartRoom() {
                this.isVisible = true;
                this.getRoomdj();
            },
            colsModel(item){
                this.isVisible = item.isOk;
            },
            change(data) {
                console.log(data);
            }
        },
        created() {
            this.getUserInfo();
        }
    }
</script>

<style scoped>

</style>
