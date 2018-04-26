<template>
    <div class="user-wrap" :style="wrapStyle">
        <img class="user-ib" src="../assets/user.jpeg" width="45" height="45" alt="">
        <span class="user-ib user-text">
            name111
        </span>
        <em class="user-ib user-text">200</em>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object
            },
            position: {
                type: Object
            }
        },
        computed: {
            wrapStyle() {
                let position = {};
                if (this.position.left) {
                    position.left = this.position.left + 'px'
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
                return position;
            }
        }
    }
</script>

<style lang="stylus" scoped>
-px2rem(px) {
    return px / 100 * 2 rem;
}

.user-wrap {
    width  -px2rem(45)
    overflow hidden
    position absolute
    .user-ib {
        display block
        font-size -px2rem(10)
        background darkcyan
        color #fff
    }
    .user-text {

    }
}
</style>
