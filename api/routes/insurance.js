
const express = require('express')
const app = express.Router()

const { list } = require('./../controllers/insurance')

app.get('/api/insurance', list)

module.exports = app
