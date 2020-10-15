<template>
  <div id="sql">
    <div
      class="uk-child-width-1-5@m"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true" />
  </div>
</template>

<script>
export default {
  name: 'Sql',
  data() {
    return {
      languages: [{
        id: 1,
        name: 'CSS',
        value: 'css',
        about: 'Cascading Style Sheets',
      }]
    }
  },
  mounted() {
  },
  methods: {
    getImageUrl(value) {
      var url = require.context('@/assets/svg/', false, /\.svg$/)
      return url('./' + value + ".svg")
    },
  },
}
</script>

<style scoped lang="scss">
#sql {
  padding: 20px;
  position: relative;
  z-index: inherit;
}
.language-card {
  cursor: pointer;
}
.language-icon {
  z-index: 1;
}
</style>