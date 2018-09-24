/**
 * Module dependencies
 */
const ClientService = require('./../services/company/clients')
const PolicyService = require('./../services/company/policies')

/**
 * @swagger
 * /api/insurance/client/user/id/{userId}:
 *  get:
 *    description: JSON.
 *    tags:
 *        - Insurance
 *    parameters:
 *        - name: userId
 *          in: path
 *          description: User ID
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: The request has succeeded
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
exports.getClientId = (req, res, next) => {
  ClientService.getId(req.params.userId).then((data) => {
    // Check the result status, by default 200.
    const status = (data.error) ? data.error.status : 200
    res.status(status)
    res.json(data)
  }).catch((err) => {
    next(err)
  })
}

/**
 * @swagger
 * /api/insurance/client/user/name/{userName}:
 *  get:
 *    description: JSON.
 *    tags:
 *        - Insurance
 *    parameters:
 *        - name: userName
 *          in: path
 *          description: User Name
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: The request has succeeded
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
exports.getClientName = (req, res, next) => {
  ClientService.getName(req.params.userName).then((data) => {
    // Check the result status, by default 200.
    const status = (data.error) ? data.error.status : 200
    res.status(status)
    res.json(data)
  }).catch((err) => {
    next(err)
  })
}

/**
 * @swagger
 * /api/insurance/policy/user/name/{userName}:
 *  get:
 *    description: JSON.
 *    tags:
 *        - Insurance
 *    parameters:
 *        - name: userName
 *          in: path
 *          description: User ID
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: The request has succeeded
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
exports.getNamePolicy = (req, res, next) => {
  PolicyService.getName(req.params.userName).then((data) => {
    // Check the result status, by default 200.
    const status = (data.error) ? data.error.status : 200
    res.status(status)
    res.json(data)
  }).catch((err) => {
    next(err)
  })
}

/**
 * @swagger
 * /api/insurance/policy/user/policy/{policyNumber}:
 *  get:
 *    description: JSON.
 *    tags:
 *        - Insurance
 *    parameters:
 *        - name: policyNumber
 *          in: path
 *          description: Policy Number
 *          type: string
 *          required: true
 *    responses:
 *      200:
 *        description: The request has succeeded
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not found
 */
exports.getPolicyNumber = (req, res, next) => {
  PolicyService.getPolicyNumber(req.params.userName).then((data) => {
    // Check the result status, by default 200.
    const status = (data.error) ? data.error.status : 200
    res.status(status)
    res.json(data)
  }).catch((err) => {
    next(err)
  })
}