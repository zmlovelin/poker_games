<template>
    <div>
        <div @click="login()">
            hh
        </div>
        <div @click="showModel">点击</div>
        <Model :modes="modes" :isVisible="isVisible" @colsModel="colsModel">
            <div slot="content">
             大使馆干啥的
            </div>
        </Model>
    </div>
</template>

<script>
    import Model from '../shared/model';
    import Radio from '../shared/radio';
  export default {
      components:{
          Model,
          Radio
      },
    data () {
      return {
        msg: '授权',
          modes:{
            title:'提示',
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
