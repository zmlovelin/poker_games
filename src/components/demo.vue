<template>
    <div>
        <div id="cssSelector">
            <div class="line">
                <div class="square el" @click="line"></div>
            </div>
        </div>
        <div @click="dhs" class="ccc" style="background: #1a1729;width: 50px;height: 50px;border-radius:50%;"></div>
        <div style="border: 1px solid #ccc;margin-top: 79px;"></div>
    </div>
</template>
<script>
    import anime from 'animejs';
    export default {
        data() {
            return {
                dh:null,

            }
        },
        methods:{
            line() {
                var cssSelector = anime({
                    targets: '#cssSelector .el',
                    translateY: [
                        { value: 80, duration: 500, elasticity: 100 },
                        { value: 160, duration: 500, delay: 1000, elasticity: 100 },
                        { value: 0, duration: 500, delay: 1000, elasticity: 100 }
                    ],
                    translateX: [
                        { value: 250, duration: 1000, delay: 500, elasticity: 0 },
                        { value: 100, duration: 1000, delay: 500, elasticity: 0 },
                        { value: 0, duration: 500, delay: 1000, elasticity: 100 }
                    ],
                    scaleX: [
                        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
                        { value: 1, duration: 900, elasticity: 300 },
                        { value: 4, duration: 100, delay: 500, easing: 'easeInCubic' },
                        { value: 1, duration: 900, elasticity: 300 }
                    ],
                    scaleY: [
                        { value: [1.75, 1], duration: 500 },
                        { value: 2, duration: 50, delay: 1000, easing: 'easeInCubic' },
                        { value: 1, duration: 450 },
                        { value: 1.75, duration: 50, delay: 1000, easing: 'easeInCubic' },
                        { value: 1, duration: 450 }
                    ],
                    rotate: 360,
                    duration: 300, //即动画的运行时间。如果要延迟执行动画，可以使用delay这个参数来指定动画延迟时间。
                    loop: true,
                    direction: 'alternate', //属性定义是否应该轮流反向播放动画 有三个值default、alternate和reverse。alternate表示动画应该轮流反向播放。reverse表示反方向运行。
                    easing: 'easeInCubic', //它是用来定义动画运行速度曲线的，与CSS3中的动画曲线一样。可以使用下面的方法来看看anime中有哪些速度曲线：

                });
            },
            dhs() {
                var hh= anime({
                    targets: '.ccc',
                    translateY: [
                        { value: 80,  },
                        { value: 70,   },
                        { value: 60,  }
                    ],
                    translateX: [
                        { value: 5,  },
                        // { value: 160, duration: 500, delay: 1000, elasticity: 100 },
                        { value: 10,  },
                        { value: 15,}
                    ],
                    rotate: 360,
                    duration: 1000, //即动画的运行时间。如果要延迟执行动画，可以使用delay这个参数来指定动画延迟时间。
                    loop: true,
                    direction: 'alternate', //属性定义是否应该轮流反向播放动画 有三个值default、alternate和reverse。alternate表示动画应该轮流反向播放。reverse表示反方向运行。
                    easing: 'easeInCubic',
                })
            }
        },

        created() {

            console.log(this.dh)
        }
    }
</script>
<style>
.square {
    width:30px;
    height: 30px;
    background: red;
}
</style>
