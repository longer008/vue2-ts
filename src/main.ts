import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from 'i18n';

import request from './utils/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// get
export function getSomethings(params:any){
  return request({
    url:'/api/getSomethings',
  })
}

// post
export function postSomethings(params:any){
  return request({
    url:'/api/postSomethings',
    method:'post',
    data:params,
  })
}
