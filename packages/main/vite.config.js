const { mergeConfig } = require('vite')
const config = require('../../vite.config')

module.exports = mergeConfig(config, {
  plugins: [],
})
