<template>
  <div id="app" class="p-3 mb-2 bg-dark text-white">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

   <!--  <img alt="Vue logo" src="./assets/logo.png" /> -->
    <router-link to="/listaNotas">Lista Notas ----</router-link>
    <router-link to="/tiempo">Tiempo</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
   <pie></pie>
    
  </div>
</template>

<script>
import axios from "axios";
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
    mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
      .then(response => {console.log(response)
      })
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
</style>
