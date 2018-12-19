import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.use(VueRouter)
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

