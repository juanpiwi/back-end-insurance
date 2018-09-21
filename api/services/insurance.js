/**
 * Insurance Service
 */

const BluebirdPromise = require('bluebird')
const BluebirdRequest = BluebirdPromise.promisifyAll(require('request'))

const { mocky } = require('./../../config')
const Logger = require('./../common/log-handler')

class InsuranceService {
  static getId (id) {
    let options = {
      method: 'GET',
      uri: `${mocky.apiUrl}/5808862710000087232b75ac`,
      json: true,
      timeout: mocky.timeout,
      time: true
    }
    Logger.debug('services : list : Endpoint %s', options.uri)

    return BluebirdRequest.getAsync(options)
      .then(response => {
        if (response.statusCode === 200) {
          Logger.info('services : list : success | time: %s ms', response.elapsedTime)
          const clients = response.body.clients
          const client = clients.find(currClient => currClient.id === id)
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
module.exports = InsuranceService
