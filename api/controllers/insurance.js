/**
 * Module dependencies
 */
const InsuranceService = require('./../services/insurance')

/**
 * @swagger
 * /api/insurance:
 *  get:
 *    description: JSON.
 *    tags:
 *        - Insurance
 *    responses:
 *      200:
 *        description: The request has succeeded
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
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
