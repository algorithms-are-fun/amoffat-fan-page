const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.exports.exportPathMap = function(defaultPathMap) {
  return {
    '/': { page: '/' },
    '/home': { page: '/home' },
    '/about': { page: '/about' },
    '/amoffat': { page: '/amoffat' },
    '/contribute': { page: '/contribute' },
  }
}