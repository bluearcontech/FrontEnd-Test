require('babel-register')({
  only: ['/src/app/', /server/, /test/],
})
require('babel-polyfill')
require('isomorphic-fetch')
