<template>
    <div class="home-bg">
        <div class="pg-home-header clearfix">
            <div class="header-left fl">
                <div class="header-pic fl" @click="handleClick">
                    <img src="../assets/images/logo.png" class= "pic-auto" alt="">
                </div>
                <div style="overflow: hidden;padding-left: .2rem;height: 100%;position: relative">
                    <div class="pic-name overflows">三生三世十里桃花</div>
                    <div class="recharge">

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
                <div class="start-con"></div>
            </div>

            <div class="con-tow">
                <div class="tow-con"></div>
            </div>

            <div class="con-end">
                <div class="end-con"></div>
            </div>

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
