<template>
    <div class="pg-home-header clearfix">
        <div class="header-left fl">
            <div class="header-pic fl">
                <img src="../assets/images/logo.png" class= "pic-auto" alt="">
            </div>
            <div style="overflow: hidden;padding-left: .2rem;height: 100%;position: relative">
                <div class="pic-name overflows">三生三世十里桃花</div>
                <div class="recharge"></div>
            </div>

        </div>
        <div class="header-right fl">
            <div class="r-Personal fl">
                个人中心
            </div>
            <div class="r-recharge fl">
                房卡充值
            </div>
        </div>
        <div class="pg-home">
            <button @click="handleClick">game</button>
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
