<template lang="html">

  <section class="lista-notas">
    <div class="mx-auto w-50"> 
      <h1>Proyecto Vue LuisMa</h1>
      <p>Filtrar: <input type="text" v-model="filtrar"></p>
      <p>Notas: <input type="text" v-model="nuevaNota"  @keyup.enter='agregarNota'
      class="form-control input-xl"></p>
      <button v-on:click="agregarNota" >Introducir</button> 
      <button v-on:click="borrarNotasSeleccionadas" >Borrar Seleccionadas</button><br> 
      <label>{{completadas}} tareas completadas de un total de {{totalTareas}}</label><br><br>    
    </div>

    <div id="nota">
    <transition-group name="animacion"> 
    <nota
    v-for="(n, index) in filtrarPalabras"
    v-bind:data-index="index"
    v-bind:clave="index"
    v-bind:prioridad="n.prioridad"
    v-bind:nombre="n.nombre"
    v-bind:seleccion="n.seleccion"
    v-bind:fecha="n.fecha"
    v-bind:key="index"
    @borrarNota="borrarNota(index)"
    @selecChek="selecChek(n)"
    @cambiarPrioridad="elegirPrioridad"></nota>
     </transition-group> 
    </div>
 
  
  </section>

</template>

<script lang="js">
import nota from "./nota"

  export default  {
    name: 'lista-notas',
    props: [],
    components:{
      nota
    },
    data(){
    return{
      notas:[],
      nuevaNota:"",
      seleccion:false,
      contador:0.,
      tareasCompletadas:0,
      tareas:0,
      prioridad:0,
      filtrar:""
    }
  },

  methods: {
    agregarNota: function() {
      this.notas.push({
        nombre: this.nuevaNota, seleccion: this.seleccion,prioridad:0,
        fecha: new Date().toLocaleString()
      });
      this.nuevaNota="";
      this.ordenar();
      localStorage.setItem("Lista de Notas", JSON.stringify(this.notas));
   },

   borrarNota:function(index){
     this.notas.splice(index, 1);
     localStorage.setItem("Lista de Notas", JSON.stringify(this.notas));
   },
    borrarNotasSeleccionadas: function () {
      this.notas = this.notas.filter(e => { return !e.seleccion;});
      localStorage.setItem("Lista de Notas", JSON.stringify(this.notas));
    },
    selecChek:function(n){
      if(n.seleccion==true){
        n.seleccion=false;
        this.tareasCompletadas--;
      }else{
        n.seleccion=true;
        this.tareasCompletadas++;
      }
      localStorage.setItem("Lista de Notas", JSON.stringify(this.notas));
      
    },
    elegirPrioridad:function(value){
      this.notas[value.clave].prioridad=value.prioridad;
      localStorage.setItem("Lista de Notas", JSON.stringify(this.notas));
      this.ordenar();
    },
    ordenar: function(){
       this.notas=this.notas.sort(function (a, b) {
        if (b.prioridad > a.prioridad) {
          return 1;
        }
        if (b.prioridad < a.prioridad) {
          return -1;
        }
        return 0;
      }); 
    },

  },
    mounted() {
    if(localStorage.getItem("Lista de Notas")){
      this.notas = JSON.parse(localStorage.getItem("Lista de Notas"));
    }
  },
    computed: {
      totalTareas:function(){
        return this.notas.length;
      },
      completadas:function(){
        let numcompletadas=0;
        for (let i = 0; i < this.notas.length; i++) {
        if(this.notas[i].seleccion==true){
         numcompletadas++;
        } 
      }
      return numcompletadas;
      },
      filtrarPalabras: function () {
      var vm = this;
      return this.notas.filter(       
        function (n) {
        return n.nombre.toLowerCase().indexOf(vm.filtrar.toLowerCase()) !== -1
      })
    },


    }
}


</script>

<style scoped >
.lista-notas {
  
}
button{
  margin-left: 100px;
}
#nota{
  
}

.animacion-enter-active {
  transition: all 2s;
}
.animacion-leave-active {
  transition: all 0.3s;
}
.animacion-enter  {
  opacity: 0;
  transform: translateY(-700px);
}  

</style>
