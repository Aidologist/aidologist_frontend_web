<template>
  <v-app id="main">
    <v-main>
      <v-toolbar color="orange">
        <v-toolbar-title class="toolbartitle">
          Linkmoo
        </v-toolbar-title>
        <div class="prebutton">
          <a>Event</a>
        </div>
        <div class="prebutton">
          <a>Explore</a>
        </div>
        <v-col>
          <div style="margin-top: 2px; margin-left: 50px; margin-right: 300px">
            <el-input placeholder="Search..." v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="Type">
                <el-option label="Tasks" value="1"></el-option>
                <el-option label="Articles" value="2"></el-option>
                <el-option label="Users" value="3"></el-option>
                <el-option label="Companies" value="4"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </v-col>
        <div style="margin-right: 10px; color: white">
          <a href="/create/task">
<!--          <a>-->
            <el-button type="primary" icon="el-icon-plus" circle></el-button>
          </a>
        </div>
        <div style="margin-top: 10px">
          <el-dropdown>
            <span style="margin-right: 30px; color: white">
              <el-avatar :size="medium" :src="circleUrl"></el-avatar>
              <span class="drowdownicon el-dropdown-link">
                <!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
              </span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Profile</el-dropdown-item>
              <el-dropdown-item>Files</el-dropdown-item>
              <el-dropdown-item>Group</el-dropdown-item>
              <el-dropdown-item divided>Setting</el-dropdown-item>
              <el-dropdown-item>Help</el-dropdown-item>
              <el-dropdown-item>Sign out</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          <v-row style="margin-top: 10px; margin-right: 5px">
            <el-switch
              v-model="value"
              inactive-color="#13CE66">
            </el-switch>
          </v-row>
          <v-row class="switchbutton">
            Mode
          </v-row>
        </div>
      </v-toolbar>
      <v-app-bar color="white">
        <!--        <el-tabs v-model="activeName" @tab-click="handleClick">-->
        <!--          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>-->
        <!--          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>-->
        <!--          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>-->
        <!--          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
        <!--        </el-tabs>-->
      </v-app-bar>

    </v-main>
  </v-app>
</template>

<script>
import particlesConfig from '../../../particles_configs/login_particles.json'

export default {
  name: 'Signup',
  data () {
    return {
      showPassword: false,
      input3: '',
      select: '',
      value: true,
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  mounted () {
    window.particlesJS('particles-js', particlesConfig)
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@600&display=swap');

  .toolbartitle{
    font-family: 'Pacifico', cursive;
    font-size: 40px;
  }
  .switchbutton{
    font-family: 'Blinker', sans-serif;
    font-size: 15px;
  }
  .prebutton{
    margin-left: 35px;
    color: white;
  }
  div a {
    color:white;
    font-size: 25px;
    font-family: 'Blinker', sans-serif;
  }
  a:link {color:white;}
  a:visited {color:white;}
  a:hover {color:white;}
  a:active {color:white;}
  .el-select {
    width: 80px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .drowdownicon i{
    /*margin-bottom: 30px;*/
  }
</style>
