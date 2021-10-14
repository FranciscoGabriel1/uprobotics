const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
