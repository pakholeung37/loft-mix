const solidPlugin = require('vite-plugin-solid')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')

module.exports = {
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/html',
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  async viteFinal(config) {
    config.plugins.unshift(solidPlugin({ hot: false }), vanillaExtractPlugin())

    return config
  },
}
