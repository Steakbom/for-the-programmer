<template>
  <div id="app">
    <navigation />
    <img
      src="@/assets/svg/background-blob.svg"
      alt="Background Blob"
      class="bg-blob-vector">
    <div id="content">
      <!-- content -->
      <router-view />
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#content {
  min-height: 100%;
  z-index: 10;
}
.bg-blob-vector {
    position: fixed;
    right: 0px;
    bottom: 0px;
    z-index: 1;
    transform: scale(1.2);
}
</style>
