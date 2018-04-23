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
                py: 0
            }
        },
        created() {
            let pxs = [], pys = [];
            for (let i = 0; i < 13; i++) {
                pxs.push(-1 - i * 30);
            }
            for (let i = 0; i < 4; i++) {
                pys.push(-1 - i * 45);
            }
            setInterval(() => {
                this.px = pxs[Math.floor(Math.random() * 13)];
                this.py = pys[Math.floor(Math.random() * 4)];
            }, 1000);
        },
        props: {
            position: {
                type: Object
            }
        },
        computed: {
            wrapStyle() {
                let position = {};
                if (this.position.left) {
                    position.left = this.position.left + 'px';
                }
                if (this.position.right) {
                    position.right = this.position.right + 'px';
                    position.left = null;
                }
                position.top = this.position.top + 'px';
                if (this.position.bottom) {
                    position.bottom = this.position.bottom + 'px';
                    position.top = null;
                }
                position.backgroundPositionX = this.px + 'px';
                position.backgroundPositionY = this.py + 'px';
                return position;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .poke-wrap {
        position fixed
        overflow hidden
        border-radius 3px
        border 1px solid antiquewhite
        width 30px
        height 45px
        background url("../assets/pokes.jpeg")
        background-size 390px 225px
        background-position-x -1px
        background-position-y -1px
    }
</style>
