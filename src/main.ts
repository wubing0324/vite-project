import App from './App.vue'
import Vue from 'vue'
import './components/svg-icons'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from './router/router'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  router,
  pinia,
  render: (h) => h(App)
})
