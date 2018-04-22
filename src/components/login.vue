<template>
  <div @click="login()">
   {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '授权'
      }
    },
      methods:{
        login() {
            this.$router.push('/home')
        }
      }
}
</script>
<style lang="stylus" scoped>

</style>
