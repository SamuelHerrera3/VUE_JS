<template>
<div>
    <div class="card" style="width: 18rem;">
  <img :src="url">
  <div class="card-body">
    <h5 class="card-title">{{nombre}}</h5>
    <p class="card-text">{{descripcion}}</p>
    <button type="button" class="btn btn-outline-dark" v-on:click="cambiarImg1">cambiar imagen</button>
  </div>
</div>
</div>
</template>

<script>
export default {
    props:["url", "nombre", "descripcion", "imagenes"],
    methods:{
        cambiarImg1(){
            this.url = this.imagenes[0]
        }
    }
};
</script>

<style>
#tarjeta{
    margin-left: 45px;
}
</style>