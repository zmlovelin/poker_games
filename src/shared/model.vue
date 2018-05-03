<template>
    <div>
        <transition name="fade">
            <div transiton="fade" id="model" class="model" :class="modes.class" v-show="isVisible">
                <div v-if="modes.title" class="model-head">
                    {{modes.title || '提示2' }}
                </div>
                <div class="model-con">
                    <div class="con-item" >
                        <div v-if="modes.content" v-html="modes.content"></div>
                        <slot v-else name="content"></slot>
                    </div>
                </div>
                <div class="model-foot">
                    <button class="model-save" @click="okEvent" v-if="modes.type === 'confirm' ">{{ modes.btnSaveText || '确 定' }}</button>
                    <button @click="onCancel" class="model-cancel"> {{ modes.btnCancelText || '取 消' }} </button>
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
        name: "cx-model",
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
            onCancel() {
                this.isOk = false;
                this.$emit('colsModel',{'isOk':this.isOk})
            },
            okEvent(){
                this.onCancel();
                this.modes.onOk()
            }

        },
        created () {}
    }
</script>
<style lang="stylus" scoped>


</style>
