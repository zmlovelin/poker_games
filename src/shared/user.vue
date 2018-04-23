<template>
    <div class="user-wrap" :style="wrapStyle">
        <img class="user-ib" src="../assets/user.jpeg" width="50" height="50" alt="">
        <span class="user-ib">
            name111
        </span>
        <em class="user-ib">200</em>
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
.user-wrap {
    width 50px
    overflow hidden
    position fixed
    .user-ib {
        display block
        font-size 12px
    }
}
</style>
