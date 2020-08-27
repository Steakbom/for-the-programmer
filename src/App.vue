<template>
  <div id="app">
    <navigation></navigation>
    <div id="content">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation/views/navigation'
export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="less">
  @import "../node_modules/uikit/src/less/uikit.less";
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
  padding: 30px;
}
</style>
