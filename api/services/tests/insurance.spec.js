/**
 * Module dependencies
 */
const { expect } = require('chai')
const nock = require('nock')
const sinon = require('sinon')

const { mocky } = require('./../../../config')
const InsuranceService = require('./../insurance')

const mockedLogger = {
  debug: sinon.stub(),
  info: sinon.stub()
}
const serverResponse = {
  clients: [
    {
      id: '111111-a',
      name: 'Britney',
      email: 'britneyblankenship@quotezart.com',
      role: 'admin'
    },
    {
      id: '2222222-b',
      name: 'Manning',
      email: 'manningblankenship@quotezart.com',
      role: 'admin'
    }
  ]
}

describe('Insurance service - List', () => {
  afterEach(() => {
    mockedLogger.info.reset()
    mockedLogger.debug.reset()
  })

  it('should successfuly', (done) => {
    nock(mocky.apiUrl)
      .get('/5808862710000087232b75ac')
      .reply(200, serverResponse)

    // Call InsuranceService list method
    InsuranceService.getId('111111-a').then((result) => {
      // Check response is as expected
      /* expect(result).to.contain.all.keys(['clients'])
      expect(result).to.deep.equal(serverResponse)
      result.clients.forEach(element => {
        expect(element).to.contain.all.keys(['id', 'name', 'email', 'role'])
      }) */
      // Next Test!
      done()
    })
  })
})
