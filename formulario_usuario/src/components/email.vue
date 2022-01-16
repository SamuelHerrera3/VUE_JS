<template>
    <div>
        <div class='login'>
            <div class='form-cont' id='email-add'>
                <img src="" alt="logo"
                    class='logo'>
                
                <h1 class='title'>Email has been send</h1>
                <p class='subtitle'>Please check your inbox for instructions on how to reset the password</p>

            <div class='e-image'>
                <img src="../assets/email.png" alt="email">
            </div>

            <button @click='goLogin' class="primary-button login-button">Go login</button>

            <p class='resend'>
                <span>Didn`t recive the email? </span>
                <a href="/">Resend</a>
            </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    methods:{
        goLogin(){
            this.$router.push('/formLogin')
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

#email-add{
    justify-items: center;
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

div #tr{
    text-align: start;
    margin-bottom: 40px;
}

.e-image{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: var(--text-inpunt-field);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
}

.e-image img{
    width: 80px;
}

.resend{
    font-size: var(--sm);
}

.resend span{
    color: var(--very-light-pink);
}

.resend a{
    color: var(--very-light-pink);
    text-decoration: none;
}

</style>