<template>
    <div class="login-bg">
        <div style="width: 100%;height: 100%;padding: .2rem;">
            <div class="fl" style="overflow:hidden;width: 46%;
            padding: .2rem .1rem;
            border: 1px solid #ccc;font-size: .15rem;margin: .1rem;"
                 v-for="(item,index) in roomListData" :key="index"
            @click="checkedRoom(item)">
                <div class="fl" style="width: 40%;height: .5rem;background: #96ea42;">房间号：</div>
                <div class="fl overflows" style="width: 60%;height: .5rem;background: blue">{{item.roomNo}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                roomListData:null,
                limit:20,
                page:1,
                roomNo:null,
                account:this.$route.params.account
            }
        },
        methods:{
            roomList() {
                let body = {
                    account:this.account,
                    limit:this.limit,
                    page:this.page,
                    roomNo:this.roomNo,
                    roomId:null
                }
                this.$userService.getRoomList(body).then(res=>{
                    console.log(res)
                    // joinRoom
                    this.roomListData = res.list;
                })
            },


            checkedRoom(item) {
                //选中的房间
                console.log(item)
                this.roomId = item.id;
                let body = {
                    account:this.account,
                    roomId:this.roomId
                }
                this.$userService.freeJoinRoom(body).then(res=> {
                    // console.log(res)
                    this.roomId = res.room.id;
                    this.gameInfoId = res.gameInfoId;
                    this.$router.push('/game/'+ this.account +'/' + this.roomId +'/' + this.gameInfoId);
                })
            }
        },

        created() {
            //获取游戏房间的数据，到时候查询也调这个接口
            this.roomList();
        }
    }
</script>
<style lang="stylus" scoped>


</style>
