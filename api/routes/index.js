/**
 * Module dependencies
 */
const insurance = require('./insurance')

// Add routes to ragnar
module.exports = (router) => {
  insurance(router)
}
