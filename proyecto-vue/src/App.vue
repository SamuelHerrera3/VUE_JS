<template>
  <div id="app">
    
  <img alt="Vue logo" src="./assets/logo.png">
      <div id="padre">
        <div id="hijo1">
          <mi-componente/>
        </div>
        <div id="hijo2">
          <formularioEstudiante/>
        </div>
      </div> 
    <br>
    <listaTarjetas/>
  </div>
  
</template>

<script>
// import MiComponente from './components/miComponente.vue'
// import formularioEstudiante from './components/formularioEstudiante.vue'
// import ListaTarjetas from './components/listaTarjetas.vue'
import Usuarios from './components/Usuarios.Vue'

export default {
  name: 'App',
  components: {
    // MiComponente,
    // formularioEstudiante,
    // ListaTarjetas
    Usuarios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}

#padre{
  width: 100%;
}

#hijo1{
  width: 50%;
  float:left;
}

#hijo2{
  width: 50%;
  float: right;
}

</style>
