<template>
    <div class="login-bg">
        <div>{{roomListData}}</div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                roomListData:null,
            }
        },
        methods:{
            roomList() {
                let body = {
                    limit:20,
                    page:1,
                    roomNo:33
                }
                this.$userService.getRoomList(body).then(res=>{
                    console.log(res)
                    this.roomListData = res
                })
            }
        },

        created() {
            this.roomList();
        }
    }
</script>
<style lang="stylus" scoped>


</style>
