<template>
    <div class="login-bg">
        <div class="logo-info" style="padding-top:2.2rem; ">
            <div class="user-name">
                <input type="text" @focus="inputFocus" placeholder="请输入昵称" v-model="username"/>
            </div>
            <div class="user-name">
                <input type="text" @focus="inputFocus" placeholder="请输入账号" v-model="usernumber"/>
            </div>

            <div class="user-name">
                <input type="password" @focus="inputFocus" placeholder="请输入密码" v-model="password"/>
            </div>

            <div class="user-name">
                <div class="btn">注&nbsp;&nbsp;册</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                usernumber:'',
                username: '',
                password: ''
            }
        },
        methods:{
            //获得焦点-----------------------------------
            inputFocus(){
                this.showMsg = false;
            },

        },

        created() {

        }
    }
</script>
<style lang="stylus" scoped>
    .slider-box {
        width: 100%;
        height: 3px;
        border-radius: 10px;
        background: #e9eaec;
        display: inline-block;
        position relative;
        .slider-drg {
            position absolute;
            left: 0px;
            top: 0;
            transform translateY(-50%)
            width: 10px;
            height: 40px;
            background: red;
            z-index 10;

        }
        .slider-w {
            position absolute;
            left: 0px;
            top: 0px;
            height: 100%;
            z-index 9;
            border-radius: 10px;
            background:#57a3f3 ;
            display: inline-block;
        }
    }
</style>
