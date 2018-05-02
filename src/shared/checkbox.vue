<template>
    <label class="cx-checkbox-wrap" >
        <span class="cx-checkbox"
              :class="wrapClass">
            <span class="cx-checkbox-inner"></span>
            <input type="checkbox"
                   :disabled="disabled"
                   :name="name"
                   :checked="parent.value.includes(label)"
                   v-model="currentValue"
                   @change="modelChange">
        </span>
        <slot></slot>
    </label>
</template>

<script>
    import {findComponentUpward} from '../core/common'
    export default {
        name: "cx-checkbox",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            label: {
                type: [String, Number, Boolean]
            }
        },
        data() {
            return {
                currentValue: this.value,
                parent: findComponentUpward(this, 'cx-checkbox-group'),
                type: null
            }
        },
        mounted () {
            this.currentValue = this.parent.value.includes(this.label);
            this.type = this.parent.type;
        },
        computed: {
            wrapClass() {
                return {
                    [`cx-${this.type}-checked`]: this.currentValue
                }
            }
        },
        methods: {
            modelChange() {
                this.parent.updateModel(this.label, this.currentValue);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cx-checkbox-wrap {
        color #333
        font-size 12px
        position relative
        line-height 20px
        height 20px
        overflow hidden
        display inline-block
        margin-right 8px
        .cx-checkbox-checked {
            .cx-checkbox-inner {
                background url("../assets/images/comp/checkbox-checked.png")
                display inline-block
                height 20px
                width 20px
                background-size 20px 18px
            }
        }
        .cx-radio-checked {
            .cx-checkbox-inner {
                background url("../assets/images/comp/radio-checked.png")
                display inline-block
                height 20px
                width 20px
                background-size 20px 18px
            }
        }
        .cx-checkbox {
            background url("../assets/images/comp/radio-bg.png")
            background-size 20px 18px
            height 20px
            width 20px
            display inline-block
            vertical-align middle

            input {
                visibility hidden
                position absolute
                left 0
                top 0
            }
        }
    }
</style>
