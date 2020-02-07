// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import form from './components/form.vue'
import css from './components/common.css'
//  import bootstrap from './components/bootstrap/css/bootstrap.min.css'
import * as log from 'loglevel'

Vue.component('app-form', form);
Vue.config.productionTip = false;
// Vue.config.performance = true

log.setLevel('info')
Object.defineProperty(Vue.prototype, '$log', { value: log })

const app = new Vue({
  el: '#app',
  template: '<App/>',
  ...App
})

export {app}
