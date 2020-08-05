<template>
  <v-app id="main">
    <v-main>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">

            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      label="Title of Task"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Describe the task you are publishing"
                    ></v-textarea>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <el-upload
                      class="upload-demo"
                      drag
                      action="https://jsonplaceholder.typicode.com/posts/"
                      multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">Drag the file here，or <em>click to upload</em></div>
                      <div class="el-upload__tip" slot="tip">cannot exceed 500kb</div>
                    </el-upload>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-btn
              color="primary"
              @click="e1 = 2"
            >
              Continue
            </v-btn>

            <v-btn text href="/main">Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-row>
              <v-col>
                dsjalidjslajdajlaijs
              </v-col>
              <v-col>
                <el-date-picker
                  v-model="value2"
                  type="datetimerange"
                  :picker-options="pickerOptions"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  align="right">
                </el-date-picker>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                dsjalidjslajdajlaijs
              </v-col>
              <v-col>
                <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                dsjalidjslajdajlaijs
              </v-col>
              <v-col>
                <el-slider v-model="value1"></el-slider>
              </v-col>
            </v-row>

            <v-btn
              color="primary"
              @click="e1 = 3"
            >
              Continue
            </v-btn>

            <v-btn
              text
              @click="e1 = 1"
            >
              Return
            </v-btn>
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

            <v-btn
              text
              @click="e1 = 2"
            >
              Return
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-main>
  </v-app>
</template>

<script>
// import particlesConfig from '../../../particles_configs/login_particles.json'

export default {
  name: 'Signup',
  data () {
    return {
      e1: 1,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      pickerOptions: {
        shortcuts: [{
          text: 'In next week',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'In next 3 weeks',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 21)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'In next month',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'In next 3 months',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  }
  // mounted () {
  //   window.particlesJS('particles-js', particlesConfig)
  // }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Blinker:wght@600&display=swap');
</style>
