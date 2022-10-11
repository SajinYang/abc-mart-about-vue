import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAKeC2BD5t_5t9InZL-hZigQfUpODITFiY',
    libraries: 'places',
  },
  installComponents: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

