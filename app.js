const express = require('express')
const bodyParser = require('body-parser')
const timeout = require('connect-timeout')
const logger = require('morgan')
const swaggerJSDoc = require('swagger-jsdoc')

const { swagger } = require('./config')
const insurance = require('./api/routes/insurance')

const app = express()

app.use(logger('dev'))
app.use(timeout('5s'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

if (process.env.NODE_ENV === 'development') {
  app.use('/api-docs.json', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    res.send(swaggerJSDoc(swagger))
    next()
  })
}
app.use(express.static('./public'))
app.use('/', insurance)

module.exports = app
