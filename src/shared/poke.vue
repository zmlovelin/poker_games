<template>
    <div class="poke-wrap" :style="wrapStyle">

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
            }
        },
        computed: {
            wrapStyle() {
                let px = -1 - Math.floor(this.value / 4) * 30,
                    py = -1 - this.value % 4 * 45,
                    position;
                if (this.isShow) {
                    position = {
                        backgroundPositionX: px + 'px',
                        backgroundPositionY: py + 'px'
                    }
                } else {
                    position = {
                        backgroundPositionX: '-61px',
                        backgroundPositionY: '-181px'
                    }
                }
                return position;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .poke-wrap {
        position absolute
        left 50%
        top 50%
        margin-left -15px
        margin-top -25px
        overflow hidden
        border-radius 3px
        border 1px solid antiquewhite
        width 30px
        height 45px
        background url("../assets/pokes.jpeg")
        background-size 390px 225px
        background-position-x -61px
        background-position-y -181px
    }
</style>
