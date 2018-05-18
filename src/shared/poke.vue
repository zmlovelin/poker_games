<template>
    <div class="poke-wrap"

         :class="wrapClass"
         @click="isShow = !isShow"
    >

    </div>
</template>

<script>
    export default {
        name: "poke",
        data() {
            return {
                px: 0,
                py: 0,
                isShow: false
            }
        },
        created() {

        },
        props: {
            position: {
                type: Object
            },
            value: {
                type: Number
            },
            hs: {
                type: String
            },
            num: {
                type: String
            },
            isView: {

            }
        },
        computed: {
            // wrapStyle() {
            //     let px = -1 - Math.floor(this.value / 4) * 30,
            //         py = -1 - this.value % 4 * 45,
            //         position;
            //     if (this.isShow) {
            //         position = {
            //             backgroundPositionX: px,
            //             backgroundPositionY: py
            //         }
            //     } else {
            //         position = {
            //             backgroundPositionX: -61,
            //             backgroundPositionY: -181,
            //         }
            //     }
            //     return position;
            // },
            wrapClass() {
                return {
                    'poke-hidden': !this.isShow,
                    [`poke-hs-${this.num}-${this.hs}`]: true
                }
            }
        },
        methods: {
            px2rem(px) {
                return px / 100 * 2 + 'rem';
            }
        },
        created() {
            this.isShow=this.isView
        }
    }
</script>

<style lang="stylus" scoped>

   /* .poke-wrap {
        position absolute
        left 145px
        top 200px
        overflow hidden
        border-radius 3px
        border 1px solid antiquewhite
        width 30px
        height 45px
        background url("../assets/images/pokes.jpeg")
        background-size 390px 225px
        background-position-x -61px
        background-position-y -181px
    }*/
</style>
