import './assets/scss/main.scss' // Customize UI <---
import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './filters'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// Vue.mixin({
//   created () {
//     console.log('Global Mixin - Created Hook')
//   }
// })

Vue.use(VueResource)
Vue.http.options.root = 'https://vue-firebase-tutorial-dcbf4.firebaseio.com/'
Vue.http.interceptors.push((request, next) => {
  console.log(request)

  if (request.url === 'interceptors.json' || request.params.node === 'interceptors') {
    if (request.method === 'POST') {
      request.method = 'PUT'
    }
    next(response => {
      response.json = () => { return {messages: response.body} }
      console.log(response)
    })
  } else {
    next()
  }
})

export const eventBus = new Vue({
  methods: {
    changeAge (age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
