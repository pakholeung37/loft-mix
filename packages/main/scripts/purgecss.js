const purgecss = require('purgecss')

purgecss({
  content: ['./**/*.html', './dist/**/*.js'],
  css: ['./dist/**/*.css'],
})
