<template>
    <div>
        <div @click="login()">
            hh
        </div>
        <div @click="showModel">点击</div>
        <Model :modes="modes" :isVisible="isVisible" @colsModel="colsModel"></Model>
    </div>
</template>

<script>
    import anime from 'animejs';
    import Model from '../shared/model';
  export default {
      components:{
          Model
      },
    data () {
      return {
        msg: '授权',
          modes:{
            title:'提示',
            btnCancelText:'取消',
            btnSaveText:'确定',
            type:'confirm',
            class:'defind',
            content:`<div>确定回到首页吗？</div>`,
            onCancel:()=> {

            },
            onOk:()=> {

            }

          },
          isVisible:false
      }
    },
      methods:{
        login() {
            this.$router.push('/home')
        },

        showModel() {
            this.isVisible = true;
        },
          colsModel(item){
            console.log(item)
            this.isVisible = item.isOk;
          }

      }
}
</script>
<style lang="stylus" scoped>

</style>
