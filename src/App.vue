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

<style>
    #app {
        font-family: MicroSoft YaHei, sans-serif,Helvetica;
        color: #2c3e50;
        margin: 0;
        padding: 0;
        height: 100%;
    }
</style>
