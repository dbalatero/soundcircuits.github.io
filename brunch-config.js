// See http://brunch.io for documentation.
module.exports = {
  files:  {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },
  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: [
          "app/styles",
          "node_modules/normalize-scss/sass"
        ]
      }
    }
  }
}
