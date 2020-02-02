import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import listaNotas from "./components/listaNotas.vue"
import listaNoticias from "./components/listaNoticias.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'

const routes = [
  { path: '/listaNotas', component: listaNotas },
  { path: '/listaNoticias', component: listaNoticias },
  { path: '*', component: listaNotas }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
