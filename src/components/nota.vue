<template lang="html">

  <section class="nota">
  <div class="animated fadeInLeft mx-auto w-50"
        style="margin:0px auto; width: auto; border: 1px solid #807979;
         background-color:#342f2f; border-radius:5px; ">

    <div id="nota">
         
        
            <a v-if="this.seleccion==true" class="fas fa-circle"
            v-bind:seleccion="this.seleccion" v-on:click="selecChek" id="chekbox"/>
            <a  v-else class="far fa-circle"
            v-bind:seleccion="this.seleccion" v-on:click="selecChek" id="chekbox"/>
          <label v-bind:class="{tachar:seleccion}">{{nombre}}</label>
        
          <p id="fechaCreacion">
          <label>Prioridad: </label>
          <button v-if="this.prioridad==2" v-on:click="cambiarPrioridad(2)" class="btn btn-danger">Alta</button>
          <button v-else v-on:click="cambiarPrioridad(2)" class="btn btn-light"> Alta</button>

          <button v-if="this.prioridad==1" v-on:click="cambiarPrioridad(1)" class="btn btn-primary">Normal</button>
          <button v-else v-on:click="cambiarPrioridad(1)" class="btn btn-light"> Normal</button>

          <button v-if="this.prioridad==0" v-on:click="cambiarPrioridad(0)" class="btn btn-success">Baja</button>
          <button v-else v-on:click="cambiarPrioridad(0)" class="btn btn-light"> Baja</button>

          Fecha de creacion:{{this.fecha}} <!-- {{this.fecha}} -->
          <button id="boton" v-on:click="borrarNota" class="btn btn-danger">X</button>
          </p>
          
    </div>

     
  </div>
  
  </section>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    //Introducimos los campos de cada nota en forma array
    props: ['nombre','seleccion', 'fecha','clave','prioridad'],
    mounted () {
    },
    
    data () {
      return {
        nuevaNota:"",
        hora:0
      }
    },
    methods: {
    agregarNota:function() {
      this.$emit("agregarNota", this.nuevaNota);
      },
    borrarNota:function() {
      this.$emit("borrarNota");
      },
    selecChek:function(){
      this.$emit("selecChek");
    },
    cambiarPrioridad:function(value){
      this.$emit("cambiarPrioridad",{'clave': this.clave, 'prioridad': value})
    }
  },   
    computed: {
    mostrarFecha: function(){
      let horaA = new Date().toLocaleString();     
      let horaB = new Date().toLocaleString();
      let diferenciaHoras = horaB - horaA;
      return diferenciaHoras;
    }
    },
  }
</script>

<style scoped >
 #nota {
  font-size: 28px;
  text-align: left;
  align-items:unset;
}  
#fechaCreacion{
  font-size: 14px;
  margin-left: 30px;
}
#chekbox{
  margin-left: 20px;
}

.tachar {
  text-decoration: line-through;
  background-color: green;
}
#boton{
  text-align: right;
  align-items: center;
  margin-left: 20px;
  
}

/* @keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
} */

</style>
