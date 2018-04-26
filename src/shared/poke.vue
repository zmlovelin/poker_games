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
                        backgroundPositionX: this.px2rem(px),
                        backgroundPositionY: this.px2rem(py)
                    }
                } else {
                    position = {
                        backgroundPositionX: this.px2rem(-61),
                        backgroundPositionY: this.px2rem(-181),
                    }
                }
                return position;
            }
        },
        methods: {
            px2rem(px) {
                return px / 100 * 2 + 'rem';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    -px2rem(px) {
        return px / 100 * 2 rem;
    }
    .poke-wrap {
        position absolute
        left 50%
        top 50%
        margin-left -px2rem(-25)
        margin-top -px2rem(-25)
        overflow hidden
        border-radius -px2rem(3)
        border 1px solid antiquewhite
        width -px2rem(30)
        height -px2rem(45)
        background url("../assets/pokes.jpeg")
        background-size -px2rem(390) -px2rem(225)
        background-position-x -px2rem(-61)
        background-position-y -px2rem(-181)
    }
</style>
