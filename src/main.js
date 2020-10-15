// Default Imports
import App from '@/App'
import router from '@/router'
import Vue from 'vue'

// UI Kits and styling
import UIkit from 'uikit'
import Icons from "uikit/dist/js/uikit-icons"

// Languages Components
import PageTemplate from '@/components/languages/controls/page-template'

Vue.component('page-template', PageTemplate)

// Shared Components
import CodeSnippet from '@/components/shared/code-snippet'

Vue.component('code-snippet', CodeSnippet)

Vue.config.productionTip = false

UIkit.use(Icons)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Global Mixin
Vue.mixin({
  data: function () {
    return {
      user: {},
    }
  },
  methods: {
    getImageUrl(value) {
      var url = require.context('@/assets/svg/languages/', false, /\.svg$/)
      return url('./' + value + ".svg")
    },
  }
})