import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import config from './firebase.config';
import './styles/global.scss';
import '../node_modules/focus-visible/dist/focus-visible.js';

Vue.config.productionTip = false;
let app = '';

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(() => {
   if (!app) {
      app = new Vue({
         store,
         router,
         render: h => h(App)
      }).$mount('#app');
   }
});
