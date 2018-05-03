<template>
    <div>
        <div @click="login()">
            打野
        </div>
        <div @click="showModel">中单</div>
        <Model :modes="modes" :isVisible="isVisible" @colsModel="colsModel">
            <div slot="content">
             大使馆干啥的
            </div>
        </Model>
        <div>

            <div ref='sliderBox' class="slider-box">
                <div ref='sliderW' class="slider-w" style=""></div>
                <div ref='sliderDrg' class="slider-drg" style=""></div>
            </div>
        </div>


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
        darg(dom) {
           let start = 0,
                move = 0,
                isMove = false;
            dom.addEventListener('touchstart', e => {
                start = e.changedTouches[0].clientX;
                this.$refs.sliderW.style.width = start + 'px';
                console.log(start)
            })
            dom.addEventListener('touchmove', e => {
                move =  e.changedTouches[0].clientX - start ;
                isMove = true;
                console.log('move',move);
                this.$refs.sliderW.style.width = move + 'px';
                dom.style.left = move  + 'px';
            })
            dom.addEventListener('touchend', e => {
                this.$refs.sliderW.style.width = move + 'px';
                dom.style.left = move  + 'px';
            })
        }

      },
      mounted() {
         this.darg(this.$refs.sliderDrg)
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
