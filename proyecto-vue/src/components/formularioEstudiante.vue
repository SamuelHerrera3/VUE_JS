<template>
    <div>
        <h1>
            Estudiante
        </h1>
        <input v-model="nombre" type="text" placeholder="Nombre">
        <br>
        <input v-model="apellido" type="text" placeholder="Apellido">
        <br>
        <input v-model="cedula" type="text" placeholder="Cedula">
        <br>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Aepllido</th>
                <th>Cedula</th>
            </tr>
            <tr v-for=" obj in estudiantes" :key="obj.cedula">
                <td id="nombre" >{{obj.nombre}}</td>
                <td id="apellido" >{{obj.apellido}}</td>
                <td id="cedula" >{{obj.cedula}}</td>
            </tr>
        </table>
        <button v-on:click="registrar">Registrar</button>
        <input v-model="buscar_cedula" type="text"/>
        <button v-on:click="buscar">Buscar</button>
    </div>
</template>

<script>
export default {
    data: () => {
        return{
        nombre: null,
        apellido: null,
        cedula: null,
        estudiantes: [],
        buscar_cedula: null
        }

    },
    methods:{
        registrar(){
            let objEstudiante = {
                nombre : this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
            };
        this.estudiantes.push(objEstudiante);
        console.log(objEstudiante)
        },

        buscar(){
            let result = this.estudiantes.filter(obj => {obj.cedula == this.buscar_cedula});
            console.log(result);
        }
    }
};
</script>

<style>
input{
    margin: 10px;
}
table{
    width: 100%;
    margin: 10px;
}

table, tr, td, th{
    border: 1px solid black;
}
</style>
