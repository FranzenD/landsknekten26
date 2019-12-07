import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import firebase from 'firebase';
import config from './firebase.config';

Vue.config.productionTip = false;

firebase.initializeApp(config);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
