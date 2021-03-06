import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import '@/plugins/bootstrap-vue'
import '@/plugins/moment'
import App from '@/App.vue'
import router from '@/router'
import '@/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
     isWriting: false,
  }),
  render: h => h(App)
}).$mount('#app')
