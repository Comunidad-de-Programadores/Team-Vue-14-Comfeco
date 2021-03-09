import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import '@/assets/styles/_main.scss'
import 'tiny-slider/src/tiny-slider.scss'
import Vuelidate from 'vuelidate'
import VueSocial from '@growthbunker/vuesocial'

Vue.use(VueSocial, {
  iconPath: '/networks/'
})
Vue.use(Vuelidate)

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
