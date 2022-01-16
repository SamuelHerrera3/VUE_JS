<template>
    <div>
        <h1>Formulario</h1>
        <form>
            <input type="text" class="inputForm" name="nombre" id="nombre" placeholder="Nombre:">
            <br>
            <input type="text" class="inputForm" name="apellido" id="apellido" placeholder="Apellido:">
            <br>
            <input type="text" class="inputForm" name="cedula" id="cedula" placeholder="Cedula:">
            <br>
            <input type="text" class="inputForm" name="telefono" id="telefono" placeholder="Telefono: ">
            <br>
            <!-- Ciudades -->
            <select class="inputForm" >
            <!-- se itera todos los municipios -->
            <option v-for="obj in municipios" :key="obj.c_digo_dane_del_municipio" :value="obj.municipio">
                {{obj.municipio}}
            </option>
        </select>
        </form>
        <!-- Boton de redireccion -->
        <br>
        <button @click="goCarros">Carros</button>
        <button v-on:click="goFormPersonas">Formulario</button>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    created: ()=>{
        store.dispatch('cargarMunicipios');
    },
    computed:{
        municipios: ()=>{
            return store.state.municipios;
        }
    },
    data: () => {
        return{
            nombre: null,
            apellido: null,
            cedula: null,
            telefono: null,
            usuarios: []
        }
    },
    methods:{
        goCarros(){
            this.$router.push('/carros')
        },
        goFormPersonas(){
            this.$router.push('/formPersonas')
        },
        crearUsuarios(){
            let objUsuario = {
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                telefono: this.telefono
            }
            this.usuarios.push(objUsuario)
        }
    }

}
</script>

<style>
.inputForm{
    margin: 10px;
    padding: 10px;
    border-style: none;
    border-bottom: 0.5px solid black;
}

input:hover{
    border-style: none;
    border-bottom: 0.5px solid rgba(0, 255, 0, 0.700);
}
</style>