<template>
  <div id="app" class="p-3 mb-2 bg-dark text-white">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<h1>Proyecto Vue Luis Manuel Pérez Osorio</h1>
<div class="row">
    <div class="col-sm-6" id="notas">
<router-link to="/listaNotas" style="color:#ffff; background-color:#a14421; "  class="p-2 btn ">Notas</router-link>
  </div>
  <div class="col-sm-6" id="noticias">
 <router-link to="/listaNoticias" style="color:#ffff; background-color:#a14421; " class="p-2 btn ">Noticias</router-link><br><br>
 </div>

</div>
  <!--   <router-link to="/listaNotas">Lista Notas ----</router-link>
    <router-link to="/listaNoticias">Noticias</router-link> -->

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
   <pie></pie>
    
  </div>
</template>

<script>

import pie from "./components/pie.vue"

export default {
  name: "app",
  components: {
    pie
  },
  data(){
    return{
      notas:[],
      nuevaNota:"",
      seleccion:false
    }
  },

  methods: {
 
   
  },
   
    
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#notas{
  text-align: right;
}
#noticias{
  text-align: left;
}
</style>
