// next.config.js
// next.config.js 
/* 
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false
  }
}) */

const withImages = require('next-images');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = withImages(withCSS(withSass({
  cssModules: true,
    cssLoaderOptions: {
        url: false
    }
})))


// next.config.js
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: false,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// })