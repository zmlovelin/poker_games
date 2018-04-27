<template>
    <div>
        <transition name="fade">
            <div transiton="fade" id="model" class="model" :class="modes.class" v-show="isVisible">
                <div class="model-head">
                    {{modes.title || '提示2' }}
                </div>
                <div class="model-con">
                    <div class="con-item" v-html="modes.content"></div>
                </div>
                <div class="model-foot">
                    <button class="model-btn" v-if="modes.type === 'confirm' ">{{ modes.btnSaveText || '确定' }}</button>
                    <button @click="hideModel" class="model-btn"> {{ modes.btnCancelText || '取消' }} </button>
                </div>
            </div>

        </transition>
        <transition name="mask">
            <div v-show="isVisible" transiton="mask" class="model-mask"></div>
        </transition>

    </div>


</template>

<script>

    export default {
        props:{
            modes:{
                type:Object
            },
            isVisible:{

            }
        },
        data () {
            return {
                msg: '授权',
                isOk:null
            }
        },
        methods:{
            hideModel() {
                this.isOk = false;
                this.$emit('colsModel',{'isOk':this.isOk})
            }

        },
        created () {

        }
    }
</script>
<style lang="stylus" scoped>


</style>
