<template>
    <div class="home-bg">
        <div class="pg-home-header clearfix">
            <div class="header-left fl">
                <div class="header-pic fl" @click="handleClick">
                    <img src="../assets/images/pq-logo.png" class= "pic-auto" alt="">
                </div>
                <div  style="overflow:hidden;padding-left: .1rem;height: 100%;position: relative">
                    <div class="pic-name overflows">三生三世十里桃花三生三世十里桃花</div>
                    <div class="recharge">
                        <span class="text-cz">405</span>
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
    </div>

</template>

<script>
    export default {

        name: "home",
        methods: {
            handleClick() {
                this.$router.push('/game')
            }
        }
    }
</script>

<style scoped>

</style>
