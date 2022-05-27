// const glob = require('glob')
// const path = require('path')
// const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    autoprefixer(),
    tailwindcss(),
    // purgecss({
    //   content: [
    //     './**/*.html',
    //     './dist/**/*.js',
    //   ],
    //   extractors: [
    //     {
    //       extractor: content => {
    //         return content.match(/[\w-/:]+(?<!:)/g) || []
    //       },
    //       extensions: ['html', 'js'],
    //     },
    //   ],
    // }),
  ],
}
