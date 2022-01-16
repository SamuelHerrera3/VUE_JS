<template>
  <div>
    <error-404/>
  </div>
</template>

<script>
import Error404 from '../components/error404.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Error404
  }
}
</script>

<style lang="scss" scoped>

@import '../scss/style.scss'



</style>