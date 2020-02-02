<template lang="html">

     <div class="card">
       <img class="card-img-top " :src=this.imagen >
        <div class="card-body" >
          <h3 class="card-title"> {{this.titulo}}</h3> 
          <p>{{this.fecha}}</p>
          <p >{{this.author}}</p>
        </div>
      </div>

</template>

<script lang="js">
  export default  {
    name: 'noticia',
    props: ['titulo','imagen','author','url','fecha','contenido', 'clave'],
    data () {
      return {
        
      }
    },
    methods: {
    },
    computed: {
    },
    
}
</script>

<style scoped>
  .card {
    width: 100%;
    border-radius: 15px;
    margin: 1rem auto;
    padding: 1rem;

    background-color: #303030;
  }
  
</style>
