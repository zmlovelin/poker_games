<template>
    <div v-if="user" class="user-wrap" :style="wrapStyle">
        <span class="user-ib user-text" :style="userTextStyle">
            {{user.realname}}
        </span>
        <img class="user-ib user-img" src="../assets/images/user.jpeg" :width="imgWidth" alt="">
        <em class="user-ib user-text user-money" :style="userTextStyle">{{user.score}}</em>
        <div class="user-ib" v-if="user.id === createdBy">房主</div>
        <div class="user-ib">{{user.prepared ? '已准备' : ''}}</div>
    </div>
</template>

<script>
    import {USER_WIDTH} from './config'
    export default {
        props: {
            user: {
                type: Object,
                default: {}
            },
            createdBy: {
                type: [String, Number]
            },
            position: {
                type: Object
            }
        },
        data() {
            return {
                imgWidth: USER_WIDTH - 6
            }
        },
        computed: {
            wrapStyle() {
                let styles = {
                    width: `${USER_WIDTH}px`
                };
                if (this.position.left) {
                    styles.left = this.position.left + 'px'
                }
                if (this.position.right) {
                    styles.right = this.position.right + 'px';
                    styles.left = null;
                }
                styles.top = this.position.top + 'px';
                if (this.position.bottom) {
                    styles.bottom = this.position.bottom + 'px';
                    styles.top = null;
                }
                return styles;
            },
            userTextStyle() {
                let scale = 0.5;
                let styles = {
                    width: `${(USER_WIDTH - 6) / scale}px`,
                    marginLeft: `-${this.imgWidth / 2 - 1.5}px`,
                    transform: `scale(${scale})`,
                    lineHeight: `${12 * 2.2 * scale}px`
                }
                return styles;
            }
        }
    }
</script>

<style lang="stylus" scoped>


.user-wrap {
    overflow: hidden;
    position: absolute;
    text-align: center;
    background-color: #392f57;
    border-radius: 5px;
    box-shadow: inset 0 0 3px 0px #7f6fb5, 0 0 1px 0.016rem #2c2648;

    .user-ib {
        display block
        font-size 12px
        color #bfbfbf
        text-shadow 0 0 1px #FF9800, 0 0 2px #FF5722, 0 0 3px #fd3d00;
    }
    .user-img {
        margin 0 auto
        border-radius 3px
    }
    .user-text {
        overflow: hidden
        text-overflow ellipsis
        white-space nowrap
    }
    .user-money {
        background #2c2648
        border-radius 99px
        box-shadow: inset 0 0 2px #1a1729;
    }
}
</style>
