// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import form from './components/form.vue'
import tabs from './components/tabs.vue'
import Home from './components/Home.vue'
import login from './components/login.vue'
import brainstorming_form from './components/brainstorming_form.vue'
import toolBartechnique from './components/toolBartechnique.vue'
import toolBarprocess from './components/toolBarprocess.vue'

import css from './components/common.css'

import * as log from 'loglevel'
Vue.component('app-form', form);
Vue.component('app-tabs', tabs);
Vue.component('brainstorming_form', brainstorming_form);



import Router from 'vue-router';
Vue.use(Router);
import Process from '@/components/Process'
import Data from '@/components/Data'
import Technique from '@/components/Technique'
import Deployment from '@/components/Deployment'
import VueRouter from 'vue-router' 




const routes =  [
  { path: '/', component: Home},
  { path: '/Process', component: Process},
  { path: '/Data', component: Data},
  { path: '/form', component: form},
  { path: '/Technique', component: Technique},
  { path: '/Deployment', component: Deployment},
  { path: '/Login', component: login}

];

const router = new VueRouter ({
  routes,
  mode: 'history'

});


Vue.config.productionTip = false;
// Vue.config.performance = true

log.setLevel('info')
Object.defineProperty(Vue.prototype, '$log', { value: log })

const app = new Vue({

  el: '#app',
  router,
  template: '<App/>',
  ...App
})

//export {app}
