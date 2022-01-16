<template>
    <div>
        <formLogin/>
    </div>
</template>

<script>
//importar los componentes
import formLogin from '../components/formLogin.vue'
import formRegister from '../components/formRegister.vue'
import email from '../components/email.vue'
import forgotPassword from '../components/forgotPassword.vue'

export default {

    components:{
        formLogin,
        formRegister,
        email,
        forgotPassword
    }
}
</script>

<style>
/* definir variables css generales del proyecto */
:root{
    --very-light-pink: #C7C7C7;
      --text-inpunt-field: #F7F7F7;
      --hospital-green: #ACD9B2;
      --white: #FFF;
      --black: #000;
      --sm: 14px;
      --md: 16px;
      --lg: 18px;
    }

body{
    font-family: 'Quicksand', sans-serif;
    margin:0;
}
</style>