<template>
  <div id="code-snippet">
    <pre>
      <code style="border-radius: 1px">
        {{ code }}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'CodeSnippet',
  props: {
    code: {
    type: String,
    required: true,
    },
  },
  data() {
    return {
    }
  }, 
}
</script>

<style scoped lang="scss">
</style>