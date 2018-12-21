import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../pages/Hello/HelloWorld'
import Testing from '../pages/testing/testing'
import Result from '../pages/result/result'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      }, {
          path: '/testing',
          name: 'Testing',
          component: Testing
      }, {
          path: '/result',
          name: 'Result',
          component: Result
      }
    ]
})
