// Default Imports
import App from './App'
import Router from './router'
import Vue from 'vue'

// UI Kits and styling
import Icons from "uikit/dist/js/uikit-icons";
import UIkit from 'uikit'

Vue.config.productionTip = false

UIkit.use(Icons)

new Vue({
  el: '#app',
  Router,
  render: h => h(App)
}).$mount('#app')

// Global Mixin
Vue.mixin({
  data: function () {
    return {
      user: {},
    }
  }
})