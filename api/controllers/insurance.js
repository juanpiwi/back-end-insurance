/**
 * Module dependencies
 */
const InsuranceService = require('./../services/insurance')

exports.list = (req, res, next) => {
  InsuranceService.list().then((data) => {
    // Check the result status, by default 200.
    const status = (data.error) ? data.error.status : 200
    res.status(status)
    res.json(data)
  }).catch((err) => {
    next(err)
  })
}
