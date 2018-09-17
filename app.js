const express = require('express')
const bodyParser = require('body-parser')
const timeout = require('connect-timeout')
const logger = require('morgan')
const question = require('./api/routes/insurance')

const app = express()

app.use(logger('dev'))
app.use(timeout('5s'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

app.use('/api/v2', question)

module.exports = app
