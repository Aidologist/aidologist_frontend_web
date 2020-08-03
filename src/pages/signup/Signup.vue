<template>
  <v-app id="signup">
    <div id="particles-js"></div>
    <v-overlay :value="overlay">
      <div style="width: 1200px">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" editable>Name of step 1</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" editable>Name of step 2</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" editable>Name of step 3</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-overlay>
  </v-app>
</template>

<script>
import particlesConfig from '../../../particles_configs/login_particles.json'

export default {
  name: 'Signup',
  data () {
    return {
      e1: 1
    }
  },
  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    formerStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = (n - 1) <= 0 ? 1 : n - 1
      }
    }
  },
  mounted () {
    window.particlesJS('particles-js', particlesConfig)
  }
}
</script>

<style scoped>
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    background-image: url("https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/2018/04/How-to-Get-More-Productivity-From-a-Larger-Team-1180x664.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
</style>
