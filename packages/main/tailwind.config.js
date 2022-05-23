const config = require('../../tailwind.config')

module.exports = {
  ...config,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ]
}
