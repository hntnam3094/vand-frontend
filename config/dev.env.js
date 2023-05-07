'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://vand-backend-production.up.railway.app/"',
  BASE_URL_API: '"https://vand-backend-production.up.railway.app/api/"'
})
