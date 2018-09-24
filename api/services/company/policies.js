/**
 * Policy Service
 */

const BluebirdPromise = require('bluebird')
const BluebirdRequest = BluebirdPromise.promisifyAll(require('request'))

const { mocky } = require('../../../config')
const Logger = require('../../common/log-handler')

class PolicyService {
  static getPolicyNumber (policyNumber) {
    let options = {
      method: 'GET',
      uri: `${mocky.apiUrl}/580891a4100000e8242b75c5`,
      json: true,
      timeout: mocky.timeout,
      time: true
    }
    Logger.debug('services : getPolicyNumber : Endpoint %s', options.uri)

    return BluebirdRequest.getAsync(options)
      .then(response => {
        if (response.statusCode === 200) {
          Logger.info('services : getPolicyNumber : success | time: %s ms', response.elapsedTime)
          const clients = response.body.clients
          const client = clients.find(currClient => currClient.clientId === policyNumber)
          if (client) {
            return Promise.resolve(client)
          }
          return Promise.resolve({ error:
            { status: 404,
              message: {
                error: 'NotFoundr',
                cause: 'Not Found',
                message: 'Error retrieving the client'
              }
            }
          })
        } else {
          return Promise.reject(response)
        }
      })
  }

  static getName (name) {
    let options = {
      method: 'GET',
      uri: `${mocky.apiUrl}/580891a4100000e8242b75c5`,
      json: true,
      timeout: mocky.timeout,
      time: true
    }
    Logger.debug('services : getName : Endpoint %s', options.uri)

    return BluebirdRequest.getAsync(options)
      .then(response => {
        if (response.statusCode === 200) {
          Logger.info('services : getName : success | time: %s ms', response.elapsedTime)
          const clients = response.body.clients
          const client = clients.filter(currClient => currClient.name === name)
          if (client) {
            return Promise.resolve(client)
          }
          return Promise.resolve({ error:
            { status: 404,
              message: {
                error: 'NotFoundr',
                cause: 'Not Found',
                message: 'Error retrieving the client'
              }
            }
          })
        } else {
          return Promise.reject(response)
        }
      })
  }
}

/**
 * Expose Service
 */
module.exports = PolicyService
