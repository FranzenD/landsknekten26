import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
   routes: [
      {
         path: '*',
         redirect: '/login'
      },
      {
         path: '/',
         redirect: '/login'
      },
      {
         path: '/home',
         name: 'home',
         component: Home,
         meta: {
            requiresAuth: true
         }
      },
      {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
         path: '/login',
         name: 'login',
         component: () =>
            import(/* webpackChunkName: "login" */ './views/Login.vue')
      }
   ]
});

router.beforeEach((to, from, next) => {
   const currentUser = firebase.auth().currentUser;
   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

   if (requiresAuth && !currentUser) {
      next('login');
   } else {
      next();
   }
});

export default router;
