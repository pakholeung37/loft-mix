const { defineConfig } = require('vite')
const solidPlugin = require('vite-plugin-solid')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')
const { visualizer } = require("rollup-plugin-visualizer");

module.exports = defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin(), visualizer()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
