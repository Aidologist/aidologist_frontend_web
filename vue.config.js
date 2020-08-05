module.exports = {
  pages: {
    home: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Linkmoo Home Page'
    },
    signup: {
      entry: 'src/pages/signup/main.js',
      template: 'public/signup.html',
      filename: 'signup/index.html',
      title: 'Linkmoo Signup'
    },
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/login.html',
      filename: 'login/index.html',
      title: 'Linkmoo Login'
    },
    main: {
      entry: 'src/pages/main/main.js',
      template: 'public/main.html',
      filename: 'main/index.html',
      title: 'Linkmoo'
    },
    createTask: {
      entry: 'src/pages/create/task/main.js',
      template: 'public/createTask.html',
      filename: 'create/task/index.html',
      title: 'Linkmoo Create Task'
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
