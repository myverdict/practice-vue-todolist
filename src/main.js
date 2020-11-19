// main entry point for a Vue app
import Vue from 'vue'
import App from './App.vue'       // main App component
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
