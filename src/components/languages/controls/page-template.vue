<template>
  <div id="page-template">
    <div
      class="uk-container uk-container-small uk-position-relative">
      <slot name="heading" />
      This is the template component.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTemplate',
  props: {
  },
  data() {
    return {
    }
  }, 
}
</script>

<style scoped lang="scss">
#page-template{
  padding: 30px 20px;
}
</style>