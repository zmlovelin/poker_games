<template>
    <div class="game-wrap">
        <pk-user v-for="(user, index) in users" :key="index" :user="user" :position="{left: user.left, top: user.top}"></pk-user>
        <pk-user v-if="loginUser" :user="loginUser" :position="{left: loginUser.left, top: loginUser.top}"></pk-user>
        <template v-for="(user, uin) in users">
            <pk-poke v-for="(poke, index) in user.pokes"
                     ref="poke"
                     :key="'key' + uin + index"
                     :id="'id' + uin + index"
                     :value="poke.value">

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
        POKE_WIDTH, USER_WIDTH, FIRST_USER_MARGIN_TOP, USER_PADDING, POKE_SPACE, USER_AREA_HEIGHT, setUserAreaHeight
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
                aaaa: null
            }
        },
        created() {
            this.aaaa = document.body.clientHeight;
            setUserAreaHeight(this.aaaa);
            // 请求数据
            let values = [], users = [];
            for (let i = 0; i < 42; i ++) {
                values.push(i + 1);
            }
            for (let i = 0; i < 8; i++) {
                let user = {
                    name: `name${i}`,
                    money: Math.floor(Math.random() * 200),
                    pokes: [],
                    top: FIRST_USER_MARGIN_TOP + USER_AREA_HEIGHT * (i % 4)
                };
                if (i < 4) {
                    user.left = USER_PADDING;
                } else {
                    user.left = 320 - USER_PADDING - USER_WIDTH;
                }
                for (let j = 0; j < 3; j++) {
                    let poke = {
                        value: values.splice(Math.floor(Math.random() * values.length), 1)[0],
                        translateY: user.top - 200
                    }
                    if (i < 4) {
                        poke.translateX = - (145 - USER_PADDING * 2 - USER_WIDTH) + j * POKE_SPACE;
                    } else {
                        poke.translateX = 320 -USER_PADDING * 2 - USER_WIDTH - 2 * POKE_SPACE - POKE_WIDTH + j * POKE_SPACE - 145;
                    }
                    user.pokes.push(poke);
                }
                users.push(user);
            }
            this.users = users;

            this.$userService.getLoginUser('guanyj', '123').then(result => {
                this.loginUser = result.data;
            })
        },
        methods: {
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
                            }
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
            px2rem(px) {
                return px / 100 * 2 + 'rem';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
