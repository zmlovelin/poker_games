<template>
    <div class="login-bg">
        <!--  logo区-->
        <!--<div class="logo-header">-->
            <!--<div class="logo-img">-->
                <!--<img src="" class="img">-->
            <!--</div>-->
        <!--</div>-->
        <div class="main-pic">
            <a href="javascript:;" class="main-icon">
                <img src="../assets/images/login_icon.png" class="img" style="border-radius:50%;">
            </a>
        </div>

        <div class="logo-info">
                <div class="user-name">
                    <span v-show="showMsg" class="msg">{{msg}}</span>
                </div>

                <div class="user-name">
                    <input type="text" @focus="inputFocus" placeholder="请输入账号" v-model="username"/>
                </div>

                <div class="user-name">
                    <input type="password" @focus="inputFocus" placeholder="请输入密码" v-model="password"/>
                </div>

                <div style="font-size: .2rem;
                padding: .2rem .2rem 0;
                color:#e63636;position: relative;z-index: 100" class="fr" @click="register">注册账号</div>
                <!--<div class="user-name clearfix">-->
                    <!--<div class="usre-img fl wx-img-width">-->
                        <!--<input type="text" maxlength="4" v-model="kaptcha" placeholder="验证码"/>-->
                    <!--</div>-->
                    <!--<div class="usre-img fl wx-img-height" @click="refreshclick">点击刷新</div>-->
                    <!--<div class="usre-img fl" @click="refreshclick">-->
                        <!--<img src="codeImg" alt="">-->
                        <!--&lt;!&ndash; <img src="http://10.130.207.130:8082/portal/verifingCode/kaptcha.do?time=1509690250234" alt=""> &ndash;&gt;-->

                    <!--</div>-->
                <!--</div>-->

                <div class="user-name">
                    <div class="btn" @click="login">登&nbsp;&nbsp;录</div>
                </div>

        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '授权',
          showMsg: false,
          msg: '',
          username: '',
          password: '',
          data:{},
          modes:{
            title:'创建房间',
            btnCancelText:'取消',
            btnSaveText:'确定',
            type:'confirm',
            content:'',
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
    methods:{
            register() {
                this.$router.push('/account')
            },
            login() {
                this.$router.push('/home')
            },
            showModel() {
                this.isVisible = true;
            },
            colsModel(item){
                console.log(item)
                this.isVisible = item.isOk;
            },
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
