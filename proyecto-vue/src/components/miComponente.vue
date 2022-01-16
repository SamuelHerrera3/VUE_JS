<template>
<div>
  <h1>{{titulo}}</h1>
  <h2>{{subtitulo}}</h2>
    <input v-model="numero_1" type="number" placeholder="numero 1" >
    <br>
    <input v-model="numero_2" type="number" placeholder="numero 2" >
    <br>
    <button v-on:click="sumar(); resta(); multiplicacion(); division()">Calcular</button>
    <br>
    <span>Resultado: </span>
    <br>
    <span>Suma: {{resultSuma}} </span>
    
    <span> Resta: {{resultResta}} </span>
    
    <span> Multiplicacion: {{resultMultp}} </span>
    <span> Division: {{resultDiv}} </span>
  </div>
</template>

<script>
export default {
    data: () => {
        return{
            titulo: 'titulo componente',
            subtitulo: 'subtitulo componente',
            numero_1: null ,
            numero_2: null,
            resultSuma: '',
            resultResta: '',
            resultMultp: '',
            resultDiv: ''
        }
    },
    methods:{
        sumar(){
            this.resultSuma = parseInt(this.numero_1) + parseInt(this.numero_2);
        },

        resta(){
            this.resultResta = parseInt(this.numero_1) - parseInt(this.numero_2);
        },

        multiplicacion(){
            this.resultMultp = parseInt(this.numero_1) * parseInt(this.numero_2);
        },

        division(){
            this.resultDiv = parseInt(this.numero_1) / parseInt(this.numero_2);
        }
    }
}
</script>

<style>

</style>