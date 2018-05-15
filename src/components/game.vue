<template>
    <div class="game-wrap">
        <pk-user v-for="(user, index) in users"
                 :key="index"
                 :user="user"
                 :createdBy="createBy"
                 :position="{left: user.left, top: user.top}">

        </pk-user>
        <pk-user v-if="loginUser"
                 :user="loginUser"
                 :createdBy="createBy"
                 :position="{left: loginUser.left, top: loginUser.top}">

        </pk-user>
        <button type="button"
                v-if="loginUser && !loginUser.prepared"
                style="position: absolute;left: 50%;"
                :style="{top: loginUser.top + 'px'}" @click="currentUserPrepare">准&nbsp;备</button>
        <template v-for="(user, uin) in users">
            <pk-poke v-for="(poke, index) in user.pokes"
                     ref="poke"
                     :key="'key' + uin + index"
                     :id="'id' + uin + index"
                     :value="poke.value"
                     :hs="poke.hs"
                     :num="poke.num"
            >

            </pk-poke>
        </template>

        <button style="position: absolute;left: 0px;width: 50px;" @click="fp">发牌{{aaaa}}</button>
        <button style="position: absolute;left: 270px;width: 50px;" @click="show">翻牌</button>

        <div class="game-footer">
            <div>声音</div>
        </div>
    </div>
</template>

<script>
    import user from '../shared/user';
    import poke from'../shared/poke';
    import anime from 'animejs';
    import {
        POKE_WIDTH, USER_WIDTH, FIRST_USER_MARGIN_TOP, USER_PADDING,
        POKE_TO_USER, POKE_SPACE, USER_AREA_HEIGHT, setUserAreaHeight,DRAG_BAR_HEIGHT
    } from '../shared/config'

    export default {
        components: {
            'pk-user': user,
            'pk-poke': poke
        },
        data() {
            return {
                pokes: null,
                users: [],
                loginUser: null,
                timeline: null,
                aaaa: null,
                createBy: null,
                roomInfo: null,
                roomId:this.$route.params.roomId,
                account:this.$route.params.account,
                gameInfoId:this.$route.params.gameInfoId
            }
        },
        created() {
            this.aaaa = document.body.clientHeight;
            setUserAreaHeight(this.aaaa);
            //获取房间的人员信息
            this.getRooms();
            // 请求数据
            let values = [], users = [];
            for (let i = 0; i < 42; i ++) {
                // values.push(i + 1);
            }
            for (let i = 0; i < 9; i++) {
                let user = {
                    realname: `name${i}`,
                    score: Math.floor(Math.random() * 200),
                    pokes: [],
                    top: FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * (i % 4)
                };
                if (i < 4) {
                    user.left = USER_PADDING;
                } else if ( i === 8) {
                    user.left = USER_PADDING;
                    user.top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;
                }else {
                    user.left = 320 - USER_PADDING - USER_WIDTH;
                }
                for (let j = 0; j < 3; j++) {
                    let poke = {
                        // value: values.splice(Math.floor(Math.random() * values.length), 1)[0],
                        translateY: user.top - 200,
                        hs: ['b', 'r', 'm', 'f'][Math.floor(Math.random() * 4)],
                        num: ['3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'][Math.floor(Math.random() * 12)],
                    }
                    if (i < 4) {
                        poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                    }else if ( i === 8) {
                        poke.translateY =   USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT - 160;
                        poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                    } else {
                        poke.translateX = 320 -USER_PADDING - POKE_TO_USER - USER_WIDTH - 2 * POKE_SPACE - POKE_WIDTH + j * POKE_SPACE - 145;
                    }
                    user.pokes.push(poke);
                }
                users.push(user);
            }
            this.users = users;

        },
        destroyed() {
            //退出游戏
            let body = {
                roomId:this.roomId, //房间id
                account:this.account, //当前用户信息
            }
            this.$userService.SignOut(body).then(res=> {
                console.log(res)
            })
        },
        computed: {

        },
        methods: {
            // 获取房间信息
            getRooms() {
                let body = {
                    roomId:this.roomId, //房间id
                    account:this.account, //当前用户信息
                    gameInfoId:this.gameInfoId || null //游戏id
                }
                this.$userService.getRoom(body).then(res => {
                    console.log(res);
                    this.createBy = res.room.createBy;
                    //自己的信息
                    this.loginUser = res.room.wxinUser;
                    //其他被邀请的玩家的信息
                    // this.users = res.room.wxinUserList;
                    //设置自己所在的位置
                    this.loginUser.left = USER_PADDING;
                    this.loginUser.top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;

                    if (res.player) {
                        this.$userService.refreshGameInfo(res).then(result => {
                            console.log('refreshGameInfo', result);
                        })
                    }
                });
            },
            fp() {
                if (this.timeline) {
                    this.timeline.restart()
                } else {
                    this.timeline = anime.timeline({
                        duration: 1500,
                        easing: 'easeOutExpo',
                    });
                    this.users.forEach((user, i) => {
                        user.pokes.forEach((poke, j) => {
                            let config = {
                                targets: `#id${i}${j}`,
                                translateX: poke.translateX,
                                translateY: poke.translateY,
                                rotate: 360,
                                scale: 0.8,
                            };
                            if (i === 0 && j === 0) {

                            } else {
                                if (j === 0) {
                                    config.offset = '-=1450';
                                } else {
                                    config.offset = '-=1350';
                                }
                            }
                            this.timeline.add(config);
                        });
                    });
                }
            },
            show() {
                this.$refs.poke.forEach(item => {
                    item.isShow = !item.isShow;
                })
            },
            /**
             * 点击准备
             */
            currentUserPrepare() {
                this.loginUser.prepared = true;
            },
            px2rem(px) {
                return px / 100 * 2 + 'rem';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
