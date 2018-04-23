<template>
  <div id="app">
      <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
    @import "assets/styles/base";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        /*text-align: center;*/
        color: #2c3e50;
        margin: 0;
        padding: 0;
    }
</style>
