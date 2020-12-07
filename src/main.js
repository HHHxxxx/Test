import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'; // 从node_modules目录中导入包

Vue.config.productionTip = false,

Vue.prototype.$axios = axios; // 把对象挂载vue中

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
