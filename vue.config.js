module.exports = {
  pages: {
    home_page: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'BunnyPo Home Page'
    },
    sign_up_page: {
      entry: 'src/pages/signup/main.js',
      template: 'public/signup.html',
      filename: 'signup.html',
      title: 'BunnyPo Signup'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
