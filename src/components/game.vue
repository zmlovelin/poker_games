<template>
    <div class="game-wrap">
        <pk-user v-for="(user, index) in users"
                 :key="index"
                 :user="user"
                 :createdBy="createBy"
                 :position="{left: user.left, top: user.top}">

        </pk-user>
        <!--<pk-user v-if="loginUser"-->
                 <!--:user="loginUser"-->
                 <!--:createdBy="createBy"-->
                 <!--:position="{left: loginUser.left, top: loginUser.top}">-->
        <!--</pk-user>-->
        <button type="button"
                v-if="loginUser && !loginUser.prepared"
                style="position: absolute;left: 50%;"
                :style="{top: loginUser.top + 'px'}" @click="currentUserPrepare">准&nbsp;备</button>
        <template v-for="(user, uin) in users">
            <pk-poke v-for="(poke, index) in user.pokes"
                     ref="poke"
                     :key="'key' + uin + index"
                     :id="'id' + uin + index"
                     :hs="poke.hs"
                     :num="poke.num"
                     :isView="poke.isView"
            >

            </pk-poke>
        </template>

        <button style="position: absolute;left: 0px;width: 50px;" @click="fp">发牌{{clientHeight}}</button>
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
                timer:null,
                dataUser:null,
                pokes: null,
                users: [],
                usersList:[],
                loginUser: null,
                timeline: null,
                clientHeight: null,
                createBy: null,
                roomInfo: null,
                roomId:this.$route.params.roomId,
                account:this.$route.params.account,
                gameInfoId:this.$route.params.gameInfoId
            }
        },
        created() {
            this.clientHeight = document.body.clientHeight;
            setUserAreaHeight(this.clientHeight);
            //获取房间的人员信息
            this.getRooms();
            // 请求数据
        },

        beforeDestroy() {
            let _self = this;
            if (_self.timer) {
                clearInterval(_self.timer);
            }
            //退出游戏
            let body = {
                roomId:this.roomId, //房间id
                account:this.account, //当前用户信息
            }
            this.$userService.SignOut(body).then(res=> {
                console.log(res)

            })
        },
        methods: {
            //数据组装=========
            createdUserList () {
                let users = [];
                console.log('93',this.usersList)
                for (let i = 0; i < this.usersList.length; i++) {

                    // let user = {
                    //     realname: `name${i}`,
                    //     score: Math.floor(Math.random() * 200),
                    //     pokes: [],
                    //     top: FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * (i % 4)
                    // };
                    // let user = this.usersList[i];
                    this.usersList[i].pokes = [];
                        this.usersList[i].top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * ( (i-1) % 4);
                    if( i === 0) { //自己永远都是在第一位
                        this.usersList[i].left = USER_PADDING;
                        this.usersList[i].top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;
                    }else if(i < 5 ) {
                        this.usersList[i].left = USER_PADDING;
                    }else {
                        this.usersList[i].left = 320 - USER_PADDING - USER_WIDTH;
                    }
                    //之前的逻辑
                    // if (i < 4) {
                    //     user.left = USER_PADDING;
                    // } else if ( i === 8) {
                    //     user.left = USER_PADDING;
                    //     user.top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;
                    // }else {
                    //     user.left = 320 - USER_PADDING - USER_WIDTH;
                    // }
                    for (let j = 0; j < 3; j++) {
                        let poke = {
                            translateY: this.usersList[i].top - 200,
                            hs: ['b', 'r', 'm', 'f'][Math.floor(Math.random() * 4)],
                            num: ['3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'][Math.floor(Math.random() * 12)],
                            isView:null
                        }
                        if( i === 0) {
                            if(j < 2) {
                                poke.isView = true
                            }
                            poke.translateY =   USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT - 160;
                            poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                        }else if( i < 5 ) {
                            poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                        }else {
                            poke.translateX = 320 -USER_PADDING - POKE_TO_USER - USER_WIDTH - 2 * POKE_SPACE - POKE_WIDTH + j * POKE_SPACE - 145;
                        }
                        //之前的逻辑
                        // if (i < 4) {
                        //     poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                        // }else if ( i === 8) {
                        //     poke.translateY =   USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT - 160;
                        //     poke.translateX = - (145 - USER_PADDING - POKE_TO_USER - USER_WIDTH) + j * POKE_SPACE;
                        // } else {
                        //     poke.translateX = 320 -USER_PADDING - POKE_TO_USER - USER_WIDTH - 2 * POKE_SPACE - POKE_WIDTH + j * POKE_SPACE - 145;
                        // }
                        this.usersList[i].pokes.push(poke);
                    }
                    users.push(this.usersList[i]);
                }
                this.users = users;
            },
            // 获取房间信息
            getRooms() {
                let body = {
                    roomId:this.roomId, //房间id
                    account:this.account, //当前用户信息
                    gameInfoId:this.gameInfoId || null //游戏id
                }
                this.$userService.getRoom(body).then(res => {
                    this.dataUser = res;
                    console.log(res);
                    this.createBy = this.dataUser.room.createBy;
                    //自己的信息
                    this.loginUser = this.dataUser.room.wxinUser;
                    this.loginUser.left = USER_PADDING;
                    this.loginUser.top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;
                    //其他被邀请的玩家的信息
                    this.usersList = this.dataUser.room.wxinUserList;
                    this.usersList.unshift(this.dataUser.room.wxinUser);
                    console.log('165',this.usersList)
                    //设置自己所在的位置
                    this.createdUserList();
                    if (res.player) {
                        this.timer = setInterval(() => {
                            this.refreshGame(this.dataUser);
                        },1000)
                    }
                });
            },
            //轮询接口
            refreshGame(data) {
                this.$userService.refreshGameInfo(data).then(res => {
                    this.dataUser = res;
                    console.log(res);
                    this.createBy = this.dataUser.room.createBy;
                    //自己的信息
                    this.loginUser = this.dataUser.room.wxinUser;
                    this.loginUser.left = USER_PADDING;
                    this.loginUser.top = FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * 4 + DRAG_BAR_HEIGHT;
                    //其他被邀请的玩家的信息
                    this.usersList = this.dataUser.room.wxinUserList;
                    this.usersList.unshift(this.dataUser.room.wxinUser);
                    console.log('165',this.usersList)
                    //设置自己所在的位置
                    this.createdUserList();
                    console.log('refreshGameInfo', res);
                    // console.log(res.room.wxinUser.prepared)
                })
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
                this.dataUser.room.wxinUser.prepared  =  this.loginUser.prepared;
                console.log(this.loginUser)
            },
            px2rem(px) {
                return px / 100 * 2 + 'rem';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
