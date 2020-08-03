<template>
  <v-app id="main">
  </v-app>
</template>

<script>
import particlesConfig from '../../../particles_configs/login_particles.json'

export default {
  name: 'Signup',
  data () {
    return {
      showPassword: false
    }
  },
  mounted () {
    window.particlesJS('particles-js', particlesConfig)
  }
}
</script>

<style scoped>
</style>
