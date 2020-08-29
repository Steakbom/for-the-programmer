// Default Imports
import App from '@/App'
import router from '@/router'
import Vue from 'vue'

// UI Kits and styling
import UIkit from 'uikit'
import Icons from "uikit/dist/js/uikit-icons";

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
  }
})