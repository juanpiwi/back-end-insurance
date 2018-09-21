const request = require('supertest')
const app = require('./../../../app')

/**
 * Testing get all insurance endpoint
 */
describe('GET /api/insurance', function () {
  it('respond with json containing a list of all insurance', function (done) {
    request(app)
      .get('/api/insurance')
      .query({ userId: '111111-2' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
