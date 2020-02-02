<template lang="html">

  <section class="nota">
  <div class="animated fadeInLeft mx-auto w-75"
        style="margin:0px auto; width: auto; border: 1px solid #807979;
         background-color:#342f2f; border-radius:5px; ">

    <div id="nota">
      <div class="row">
        <div class="col-sm-5">
          
        <a class=" fa fa-circle-o  " style="float: left;margin: 3rem;font-size: 25px;" 
        v-bind:seleccion="this.seleccion" v-if="this.seleccion==false" v-on:click="selecChek"/>
        <a v-else class=" fa fa-check-circle" style="color:#00bc8c;float: left;margin: 3rem;font-size: 25px;" 
        v-bind:seleccion="this.seleccion" v-on:click="selecChek"/>
        <label id="nombre" v-bind:class="{tachar:seleccion}">{{nombre}}</label>
        </div>

    <div class="col-sm-7">
          <p id="fechaCreacion">
          <label>Prioridad: </label>
          <button v-if="this.prioridad==2" v-on:click="cambiarPrioridad(2)" class="btn btn-danger">High</button>
          <button v-else v-on:click="cambiarPrioridad(2)" class="btn btn-light"> High</button>

          <button v-if="this.prioridad==1" v-on:click="cambiarPrioridad(1)" class="btn btn-primary">Normal</button>
          <button v-else v-on:click="cambiarPrioridad(1)" class="btn btn-light"> Normal</button>

          <button v-if="this.prioridad==0" v-on:click="cambiarPrioridad(0)" class="btn btn-success">Low</button>
          <button v-else v-on:click="cambiarPrioridad(0)" class="btn btn-light"> Low</button>

          Fecha de creacion:{{this.fecha}} <!-- {{this.fecha}} -->
          <button id="boton" v-on:click="borrarNota" class="btn btn-danger">X</button>
          </p>
          </div>
      </div>
          
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
  align-items: unset;
  margin-top: 30px;
  margin-bottom: -40px;
  font-weight: bold;
  margin: 0 10px;
  padding: 0;
}
#fechaCreacion {
  font-size: 14px;
  margin-top: 40px;
}
#chekbox {
  margin-left: 20px;
}

.tachar {
  text-decoration: line-through;
  background-color: green;
}
#boton {
  text-align: right;
  align-items:unset;
  margin-left: 20px;
}
#nombre{
  margin-top: 40px;
align-items: flex-end;
}

</style>
