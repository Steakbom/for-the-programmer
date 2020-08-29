<template>
  <div id="languages">
    <div class="uk-child-width-1-5@m" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
    <div v-for="(item, index) in languages" :key="item.id" :data-index="index">
        <div class="uk-card-small uk-card-default uk-card-body uk-card-hover">
            <h3 class="uk-card-title">{{item.name}}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data() {
    return {
      languages: [{
        id: 1,
        name: 'CSS'
      },{
        id: 2,
        name: 'HTML'
      },{
        id: 3,
        name: 'JavaScript'
      }]
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style scoped lang="scss">
#languages {
  padding: 20px;
  position: relative;
  z-index: inherit;
}
</style>