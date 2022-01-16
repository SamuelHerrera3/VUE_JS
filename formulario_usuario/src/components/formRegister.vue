<template>
    <div>
        <div class='login'>
            <div class='form-cont'>       
                <h1 class='title' id='tr'>Register</h1>

                <form action="/" class='form'>
                    <label for="name" class='label label-r'>Name</label>
                    <input type="text"  id="name" placeholder="Example: Carla Rodriguez" class="input input-name">
                    
                    <label for="email" class= 'label label-r'>Email address</label>
                    <input type="text"  id="email" placeholder="correo@ejemplo.com" class="input input-email">

                    <label for="password" class= 'label label-r'>Password</label>
                    <input type="password"  id="password" placeholder="********" class="input input-pwd">

                    <input @click='confEmail' type="submit" value="submit" class='primary-button login-button'>
                    
                    <button @click='goLogin' class="secondary-button singup-button">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{

        goLogin(){
            this.$router.push('/formLogin')
        },

        confEmail(){
            this.$router.push('/confirm')
        }
    }
}
</script>

<style>

.login{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}

.form-cont{
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
}

.logo{
    width: 150px;
    margin-bottom: 50px;
    justify-self: center;
    display: none;
}

.title{
    font-size: var(--lg);
    margin-bottom: 12px;
    text-align: center;
}

.subtitle{
    color: var(--very-light-pink);
    font-size: var(--md);
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 35;
    text-align: center;
}

.form{
    display: flex;
    flex-direction: column;
}

.form a{
    color: var(--hospital-green);
    font-size: var(--sm);
    text-align: center;
    text-decoration: none;
    margin-bottom: 54px;
}

.label{
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
}

.input{
    background-color: var(--text-inpunt-field);
    border: none;
    border-radius: 8;
    height: 30px;
    font-size: var(--md);
    padding: 8px; 
    margin-bottom: 12px;
}

.input-email, .input-name, .input-pwd{
    margin-bottom: 30px;
}

.primary-button{
    background-color: var(--hospital-green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
}

.primary-button:hover{
    background-color: var(--white);
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
}

.secondary-button{
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
}

.secondary-button:hover{
    background-color: var(--hospital-green);
    color: var(--white);
}

.login-button{
    margin-top: 14px;
    margin-bottom: 30px;
}
</style>