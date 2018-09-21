
const express = require('express')
const app = express.Router()

const { list } = require('./../controllers/insurance')

app.get('/api/insurance/:userId', list)

module.exports = app
