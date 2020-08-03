<template>
  <div class="hello">
    <el-row type="flex" class="row-bg" justify="center">
      <vue-typed-js :strings="['Welcome to the Homepage of BunnyPo']">
        <h1 class="typing titlefont"></h1>
      </vue-typed-js>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <vue-typed-js :strings="['A new adventure coming soon!']">
        <h1 class="typing titlefont"></h1>
      </vue-typed-js>
    </el-row>
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <hr/><br/>
    <div class="titlefont">
      What our platform is about?
    </div>
    <el-row style="height: 200px">
      <el-col :span="12">
        <div class="grid-content" style="background: #DB9ABC">
          <br/>
          <div class="titlefont">
            If you want to post tasks
          </div>
          <div class="">
            We are here to provide you:<br/>
            1. Best crowd souring experience;<br/>
            2. Build you idea even if you don't know where to start<br/>
            3. Track and follow the best engineers in the fields;<br/>
            4. Help you on your project management;<br/>
          </div><br/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" style="background: #B5DBFF">
          <br/>
          <div class="titlefont">
            If you want to do tasks
          </div>
          <div class="">
            We are here to help you:<br/>
            1. Find exactly the task you want;<br/>
            2. Getting paid for you techniques and projects;<br/>
            3. Build your career in different fields;<br/>
            4. Learn, think, innovate through our community;<br/>
          </div><br/>
        </div>
      </el-col>
    </el-row>
    <br/><hr/><br/>
    <div class="titlefont">
      Introducing the fantastic features!
    </div>
    <hr/><br/>
    <div class="titlefont">
      Timeline of our products!
    </div>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
          <v-card-text class="white text--primary">
            <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
            <v-btn
              :color="item.color"
              class="mx-0"
              outlined
            >
              Button
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <hr/><br/>
    <div class="titlefont">
      How to use our products?
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ],
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer'
      }
    ],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .titlefont{
    font-family: 'Krona One', sans-serif;
    margin-bottom: 25px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
