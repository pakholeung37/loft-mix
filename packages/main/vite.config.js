const { mergeConfig } = require('vite')
const devtools = require('solid-devtools/vite').default
const config = require('../../vite.config')

module.exports = mergeConfig(config, {
  plugins: [devtools({ name: true })],
})
