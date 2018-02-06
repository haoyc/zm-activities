import Vue from 'vue'
import "babel-polyfill"
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
// import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './theme/index.css'
// import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

// import loadingImg from '@/assets/loading.gif'
import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueClipboard)
Vue.use(ElementUI, {})
// Vue.use(VueLazyLoad,{
//   error:loadingImg,
//   loading:loadingImg
// })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
