import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import listaNotas from "./components/listaNotas.vue"
import tiempo from "./components/tiempo.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

const routes = [
  { path: '/listaNotas', component: listaNotas },
  { path: '/tiempo', component: tiempo },
  { path: '*', component: listaNotas }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
