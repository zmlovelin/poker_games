<template>
    <div class="game-wrap">
        <pk-user v-for="(user, index) in users" :key="index" :position="{left: user.left, top: user.top, right: user.right}"></pk-user>

        <div v-for="(user, uin) in users">
            <pk-poke v-for="(poke, index) in user.pokes"
                     ref="poke"
                     :key="uin + index"
                     :id="'id' + uin + index"
                     :value="poke.value"></pk-poke>
        </div>

        <button @click="fp">发牌</button>
        <button @click="show">翻牌</button>
    </div>
</template>

<script>
    import user from '../shared/user';
    import poke from'../shared/poke';
    import anime from 'animejs';

    export default {
        components: {
            'pk-user': user,
            'pk-poke': poke
        },
        data() {
            return {
                pokes: null,
                users: [],
                timeline: null
            }
        },
        created() {
            // 请求数据
            let values = [], users = [];
            for (let i = 0; i < 42; i ++) {
                values.push(i + 1);
            }
            for (let i = 0; i < 3; i++) {
                let user = {
                    name: `name${i}`,
                    pokes: [],
                    top: 50 + 80 * (i % 4)
                };
                if (i < 4) {
                    user.left = 10;
                    user.right = null
                } else {
                    user.left = null;
                    user.right = 10;
                }
                for (let j = 0; j < 3; j++) {
                    let poke = {
                        value: values.splice(Math.floor(Math.random() * values.length), 1)[0],
                        top: user.top
                    }
                    if (user.left) {
                        poke.left = user.left + 50 + j * 10;
                        poke.right = null;
                    } else {
                        poke.left = 205 + j * 10;
                    }
                    user.pokes.push(poke);
                }
                users.push(user);
            }
            this.users = users;
            console.log(this.users);
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
                                top: poke.top,
                                marginLeft: 0,
                                marginTop: 0,
                            }
                            if (i === 0 && j === 0) {

                            } else {
                                if (j === 0) {
                                    config.offset = '-=1450';
                                } else {
                                    config.offset = '-=1350';
                                }
                            }
                            if (poke.left) {
                                config.left = poke.left;
                            } else {
                                config.right = poke.right;
                            }
                            this.timeline.add(config);
                        });
                    });
                }
            },
            show() {
                this.$refs.poke.forEach(item => {
                    console.log(item);
                    item.isShow = !item.isShow;
                })
            }
        }
    }
</script>

<style scoped>

</style>
