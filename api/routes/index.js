/**
 * Module dependencies
 */
const client = require('./clients')
const swagger = require('./swagger')

// Add routes to ragnar
module.exports = (router) => {
  client(router)
  swagger(router)
}
