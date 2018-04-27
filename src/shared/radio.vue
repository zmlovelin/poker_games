<template>
    <div>
        <div class="radio" @click="checkeds">
            <div :class="{'checked-bg':checked}"></div>
            <input type="radio" :name="name">
        </div>

        <!--<input type="radio" name="sex" value='male'/><label>男</label>-->
        <!--<input name="sex" checked  type="radio" value="female"/><label>女</label>-->
        <!--<input name="sex" type="radio" value="gay"/><label>同性恋</label>-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                checked:false
            }
        },
        methods:{
            checkeds () {
                this.checked = !this.checked;
            }
        }
    }


</script>
<style lang="stylus" scoped>
.radio {
    width 25px;
    height 25px;
    background #f1efef;
    border-radius 50%;
    padding 2px;
    .checked-bg {
        width:100%;
        height:100%;
        background #96ea42;
        border-radius 50%;
    }
}
</style>
