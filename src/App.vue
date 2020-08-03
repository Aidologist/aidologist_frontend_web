<template>
  <v-app>
    <v-main>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="8">
              <div class="grid-content">
                <el-row type="flex" class="row-bg" justify="front">
                  <img src="BunnyPoLogo.png" width="40px"/>
                  <span class="logofont">
                  BunnyPo
                </span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content" style="margin-top: 15px">
                <el-row :gutter="15">
                  <el-col :span="6">
                    <div class="grid-content">
                      <el-dropdown>
                      <span class="el-dropdown-link">
                        Product
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>BunnyPo platform</el-dropdown-item>
                          <el-dropdown-item>BunnyPo Android/IOS</el-dropdown-item>
                          <el-dropdown-item divided>CarrotPoll platform</el-dropdown-item>
                          <el-dropdown-item divided>BunnyPo Community</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <el-dropdown>
                      <span class="el-dropdown-link">
                        Solution
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>Planning Generation Solution</el-dropdown-item>
                          <el-dropdown-item divided>Video Meeting Solution</el-dropdown-item>
                          <el-dropdown-item divided>Projects management Solution</el-dropdown-item>
                          <el-dropdown-item divided>Company agreements recording Solution</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <el-dropdown>
                      <span class="el-dropdown-link">
                        Price
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>Pricing for Company</el-dropdown-item>
                          <el-dropdown-item>Pricing for Studio</el-dropdown-item>
                          <el-dropdown-item>Pricing for Startup</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="grid-content">
                      <el-dropdown>
                      <span class="el-dropdown-link">
                        Contact
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>Social Medias</el-dropdown-item>
                          <el-dropdown-item>Emailing</el-dropdown-item>
                          <el-dropdown-item>Appointment</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <el-row type="flex" class="row-bg" justify="end">
                  <el-row :span="6">
                    <div class="grid-content">
                      <a href="signup.html">
                        <el-button type="primary" icon="el-icon-s-platform" plain>Login</el-button>
                      </a>
                      <a href="signup.html">
                        <el-button plain icon="el-icon-s-flag">Join</el-button>
                      </a>
                      <el-dropdown style="margin-left: 10px">
                        <el-button type="primary">
                          Languages<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>English</el-dropdown-item>
                          <el-dropdown-item>中文</el-dropdown-item>
                          <el-dropdown-item>Deutsch</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-row>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <HelloWorld/>
        </el-main>
        <el-footer>
          <hr/>
          <el-row type="flex" class="row-bg" justify="front">
            <div style="position: relative">
              <span class="footerfont">Follow us:  </span>
              <el-button-group>
                <el-button size="mini">Twitter</el-button>
                <el-button size="mini">Facebook</el-button>
                <el-button size="mini">Instagram</el-button>
                <el-button size="mini">Wechat</el-button>
                <el-button size="mini">Youtube</el-button>
                <el-button size="mini">LinkedIn</el-button>
              </el-button-group>
            </div>
          </el-row>
          <el-row type="flex" class="row-bg" justify="front">
            <div style="position: relative">
              <span class="footerfont">About our team:  </span>
              <el-button-group>
                <el-button size="mini">Team</el-button>
                <el-button size="mini">Newsroom</el-button>
                <el-button size="mini">Careers</el-button>
                <el-button size="mini">Help</el-button>
              </el-button-group>
            </div>
          </el-row>
        </el-footer>
      </el-container>
<!--      <HelloWorld/>-->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }
  .logofont{
    font-family: 'Pacifico', cursive;
    font-size: 25px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .footerfont{
    font-family: 'Krona One', sans-serif;
    margin-bottom: 10px;
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  el-button-group el-button{
    font-size: 10px;
  }
</style>
