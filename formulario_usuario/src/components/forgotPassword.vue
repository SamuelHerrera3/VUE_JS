<template>
  <div>
      <div class='login'>
        <div class='form-cont'>
            <img src="" alt="logo"
                class='logo'>
            
            <h1 class='title'>Create a new password</h1>
            <p class='subtitle'>Enter a new password for your account</p>

            <form action="" class='form'>
                <label for="password" class= 'label'>Password</label>
                <input type="password"  id="password" placeholder="********" class="input input-pwd">

                <label for="re-password" class= 'label'>Re-enter password</label>
                <input type="password"  id="re-password" placeholder="********" class="input input-pwd">
                <input @click="confEmail" type="submit" value="Confirm" class='primary-button login-button'>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        confEmail(){
            this.$router.push('/confirm')
        }
    }
}
</script>

<style>

</style>