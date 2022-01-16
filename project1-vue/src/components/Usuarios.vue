<template>
    <div>
        <h1>Usuarios</h1>
        <div id="padre">
            <div id = "formRegistro">
                <form>
                    <input class= "input" v-model="nombre" placeholder="Nombre:" type="text" name="nombre" id="nombre">
                    <br>
                    <input class= "input" v-model="apellido" placeholder="Apellido:" type="text" name="apellido" id="apellido">
                    <br>
                    <input class= "input" v-model="nickname" placeholder="Nickname:" type="text" name="nickname" id="nickname">
                    <br>
                    <input class= "input" v-model="email" placeholder="Email:" type="text" name="email" id="email">
                    <br>
                    <input class= "input" v-model="telef" placeholder="Telefono:" type="text" name="tel" id="telefono">
                </form>
                <button v-if="!mostrarAct" v-on:click="crearUsuario" type="button" id="btn_agregar" class="btn btn-outline-dark">Agregar usuario</button>
                <button v-if="mostrarAct" type="button" id="btn_actualizar" class="btn btn-outline-dark">Actualizar</button>
            </div>
            <br>
            <div id="tablaRegistro">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nickname</th>
                            <th>Email</th>
                            <th>telefono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="objUsuario in usuarios" :key="objUsuario.nickname">
                            <td>{{objUsuario.nombre}}</td>
                            <td>{{objUsuario.apellido}}</td>
                            <td>{{objUsuario.nickname}}</td>
                            <td>{{objUsuario.email}}</td>
                            <td>{{objUsuario.telef}}</td>
                            <td>
                                <button v-on:click="actualizar(objUsuario.nombre, objUsuario.apellido, objUsuario.nickname, objUsuario.email, objUsuario.telef)" type="button" class="btn btn-outline-success">Actualizar</button>
                                <button type="button" class="btn btn-outline-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
var obj1={
    nombre: "carolina",
    apellido: "perez",
    nickname: "usuario1",
    email: "u1@gmail.com",
    telef: 12345
};

var obj2={
    nombre: "carlos",
    apellido: "ospina",
    nickname: "usuario2",
    email: "u2@gmail.com",
    telef: 54321
};

var obj3={
    nombre: "luis",
    apellido: "escobar",
    nickname: "usuario3",
    email: "u3@gmail.com",
    telef: 56789
};

var obj4={
    nombre: "sara",
    apellido: "ruiz",
    nickname: "usuario4",
    email: "u4@gmail.com",
    telef: 98765
};

export default {
    data: () => {
        return {
        nombre: null,
        apellido: null,
        nickname: null,
        email: null,
        telef: null,
        mostrarAct: false,
        usuarios: [obj1, obj2, obj3, obj4]
        }
    },
    
    methods: {
        crearUsuario(){
            let objUsuario = {
                nombre: this.nombre,
                apellido: this.apellido,
                nickname: this.nickname,
                email: this.email,
                telef: this.telef
            }
            this.usuarios.push(objUsuario)
            this.limpiarCampos()
        },

        limpiarCampos(){
            this.nombre = null,
            this.apellido = null,
            this.nickname = null,
            this.email = null,
            this.telef = null
        },

        actualizar(nombre, apellido, nickname, email, telef ){
            this.nombre = nombre;
            this.apellido = apellido;
            this.nickname = nickname;
            this.email = email;
            this.telef = telef;
            this.mostrarAct = !this.mostrarAct;
        },

        borrar(){
            
        }
    }
}
</script>

<style>
.input{
    margin: 10px;
}
#btn_agregar{
    margin:15px;
}
#padre{
    width: 100%;
}

#formRegistro{
    width: 40%;
    float: left;
}

#tablaRegistro{
    width: 60%;
    float: right;
    
}
table{
    width: 90%;
    max-width: 100%;
    margin: 0 auto;
}

table, tr, td, th{
    border: 0.5px solid black;
}

td button{
    margin: 5px 
}
</style>