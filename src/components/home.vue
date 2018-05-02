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

        <div class="pg-home-con" @click="abcde">
            <div class="con-start">
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
                <cx-checkbox-group v-model="models">
                    <cx-checkbox label="zs">
                        <span>张三</span>
                    </cx-checkbox>
                    <cx-checkbox label="ls">
                        <span>李四</span>
                    </cx-checkbox>
                    <cx-checkbox  label="ww">
                        <span>王五</span>
                    </cx-checkbox>
                </cx-checkbox-group>

                <cx-checkbox-group v-model="radioModel" type="radio">
                    <cx-checkbox label="zs">
                        <span>张三</span>
                    </cx-checkbox>
                    <cx-checkbox label="ls">
                        <span>李四</span>
                    </cx-checkbox>
                    <cx-checkbox  label="ww">
                        <span>王五</span>
                    </cx-checkbox>
                </cx-checkbox-group>
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
                name:null,
                models: ['zs', 'ww'],
                radioModel: 'ls',
                modes:{
                    title:'提示',
                    btnCancelText:'取消',
                    btnSaveText:'确定',
                    type:'confirm',
                    class:'defind',
                    onCancel:()=> {
                        alert('点击了取消')
                    },
                    onOk:()=> {
                        alert('点击了确定')
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
                    this.userInfo = JSON.parse(success.data.user);
                   console.log(JSON.parse(success.data.user));
                },error=>{

                })
            },
            abcde() {
                this.isVisible = true;
            },
            colsModel(item){
                this.isVisible = item.isOk;
            }
        },
        created() {
            this.getUserInfo();
        }
    }
</script>

<style scoped>

</style>
