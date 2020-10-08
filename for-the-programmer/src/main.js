import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './index.css'

// UI Kits and styling
import UIkit from 'uikit'
import Icons from "uikit/dist/js/uikit-icons"

// Shared Components
import CodeSnippet from '@/components/shared/code-snippet'

Vue.component('code-snippet', CodeSnippet)

Vue.config.productionTip = false

UIkit.use(Icons)

createApp(App).mount('#app')

// Global Mixin
Vue.mixin({
  data: function () {
    return {
      user: {},
    }
  },
  methods: {
    getImageUrl(value) {
      var url = require.context('@/assets/svg/', false, /\.svg$/)
      return url('./' + value + ".svg")
    },
  }
})
