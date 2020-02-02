<template lang="html">

<div >
  <select v-model="categoria" @change="getNoticias"  id="lista">
    <option >general</option>
    <option>business</option>
    <option>entertainment</option>
    <option selected>sports</option>

    
  </select>

  <div class="lista-noticias container-fluid"  >
    <transition-group name="" class="mx-auto w-50">
    <noticia  v-for="(elemento, index) in datos" v-bind:key="index" 
      v-bind:titulo="elemento.title" 
      v-bind:imagen="elemento.urlToImage"
      v-bind:descripcion="elemento.description"
      v-bind:autor="elemento.author"
      v-bind:url="elemento.url"
      v-bind:fecha="elemento.publishedAt"
      v-bind:contenido="elemento.content"
      v-bind:clave="index"
      ></noticia>
    </transition-group>
  </div>
  </div>

</template>

<script lang="js">
import axios from 'axios'
import noticia from './noticia.vue'
  export default  {
    name: 'lista-noticias',
    components: {
      noticia
    },
    props: [],
    data () {
      return {
        datos:[],
        categoria:'sports',
        page:0,
        total:0
      }
    },
    methods: {
      getNoticias: function(){
            axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=cb307264ad4d4cdbbeeb28abd216bf26&category="+this.categoria)
            .then(
              response =>{
                this.datos=response.data.articles;
                console.log(this.datos);
                this.page=1;
                this.total=(parseInt(response.data.totalResults)-10);
                },
              error =>{
                console.log(error)
              })
      },

    },
    computed: {
        
    },
    mounted(){
      this.getNoticias();
    },
}
</script>

<style scoped>
  .lista-noticias {
    display: flex;
    flex-flow: column nowrap;
    margin:auto 0;
  }
  #lista{
    width: 10%;
    text-align: center;
  }


</style>