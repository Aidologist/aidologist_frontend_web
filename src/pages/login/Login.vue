<template>
  <v-app id="login">
    <div id="particles-js"></div>
    <v-overlay :value="overlay">
      <div style="width: 600px">
        <el-row type="flex" class="row-bg" justify="front">
          <span class="logofont">BunnyPo Login</span>
        </el-row>
        <v-container>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  persistent-hint
                  outlined
                  required
                  filled
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  persistent-hint
                  outlined
                  required
                  filled
                ></v-text-field>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col>
                  <a href="\">
                    <v-btn text>
                      Cancel
                    </v-btn>
                  </a>
                </v-col>
                <v-col>
                  <a href="#">
                    <v-btn style="float: right" color="primary">
                      Login
                    </v-btn>
                  </a>
                  <a href="/signup/popular">
                    <v-btn style="float: right; margin-right: 10px" text>
                      Signup
                    </v-btn>
                  </a>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-container>
        <hr/>
        <div style="margin-top: 20px; margin-bottom: 20px">
          Know more about our:
          <a href="#">User Agreement</a>,
          <a href="#">Privacy Policy</a>,
          <a href="#">Cookie Policy</a>
        </div>
        <div style="margin-top: 20px; margin-bottom: 20px">
          If you have <b>accounts for another apps</b>, maybe you can try:
          <router-link to="popular">Popular</router-link>,
          <router-link to="professional">Professional</router-link>,
          <router-link to="worldwide">Worldwide</router-link>
        </div>
        <hr/>
        <div>
          <router-view></router-view>
        </div>
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
      showPassword: false
    }
  },
  comments: {
  },
  mounted () {
    window.particlesJS('particles-js', particlesConfig)
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
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
  .logofont{
    font-family: 'Pacifico', cursive;
    font-size: 60px;
  }
  div a {
    color: white;
    text-decoration-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  div a:link {color:white;}
  div a:visited {color:white;}
  div a:hover {color:white;}
  div a:active {color:white;}
</style>
