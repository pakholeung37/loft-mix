const { defineConfig } = require('vite')
const solidPlugin = require('vite-plugin-solid')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')

module.exports = defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
