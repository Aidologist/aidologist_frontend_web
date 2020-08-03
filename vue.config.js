module.exports = {
  pages: {
    home: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'BunnyPo Home Page'
    },
    signup: {
      entry: 'src/pages/signup/main.js',
      template: 'public/signup.html',
      filename: 'signup/index.html',
      title: 'BunnyPo Signup'
    },
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/login.html',
      filename: 'login/index.html',
      title: 'BunnyPo Login'
    },
    main: {
      entry: 'src/pages/main/main.js',
      template: 'public/main.html',
      filename: 'main/index.html',
      title: 'BunnyPo'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
