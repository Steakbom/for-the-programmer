<template>
  <div id="languages">
    <div
      class="uk-child-width-1-5@m"
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
      <div
        v-for="(item, index) in languages"
        :key="item.id"
        :data-index="index">
        <div
          class="uk-card-small uk-card-default uk-card-body uk-card-hover language-card"
          :uk-tooltip="'Lookup concepts regarding ' + item.name"
          @click="selectLanguage(item.value)">
          <h3 class="uk-card-title">
            <div>{{ item.name }}</div>
          </h3>
          <img
            :src="getImageUrl(item.value)"
            alt=""
            class="language-icon">
          <p>{{ item.about }}</p>
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
        name: 'CSS',
        value: 'css',
        about: 'Cascading Style Sheets',
      },{
        id: 2,
        name: 'HTML',
        value: 'html',
        about: 'Cascading Style Sheets',
      },{
        id: 3,
        name: 'JavaScript',
        value: 'javascript',
        about: 'Cascading Style Sheets',
      },
      {
        id: 4,
        name: 'Python',
        value: 'python',
        about: 'Cascading Style Sheets',
      },
      {
        id: 5,
        name: 'C#',
        value: 'csharp',
        about: 'Cascading Style Sheets',
      },
      {
        id: 6,
        name: 'MySql',
        value: 'mysql',
        about: 'MySql',
      }]
    }
  },
  methods: {
    selectLanguage(selectedLanguage) {
      console.log(selectedLanguage)
      this.$router.push({ name : selectedLanguage})
      // console.log(selectedLanguage)
    }
  },
}
</script>

<style scoped lang="scss">
#languages {
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