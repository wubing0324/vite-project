import App from './App.vue'
import Vue from 'vue'
import './components/svg-icons'
import { createPinia, PiniaVuePlugin } from 'pinia'
import '@/utils/rem.ts'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  router,
  pinia,
  render: (h) => h(App)
})
