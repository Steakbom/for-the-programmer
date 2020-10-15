<template>
  <div id="home">
    <div class="uk-container uk-container-small uk-position-relative">
      <code-snippet
        :code="data" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      data: '<html>This is a test Html.</html>'
    }
  }, 
}
</script>

<style scoped lang="scss">
</style>
