
const express = require('express')
const app = express.Router()

const { getClientId, getClientName, getNamePolicy, getPolicyNumber } = require('../controllers/index')

app.get('/api/insurance/client/user/id/:userId', getClientId)
app.get('/api/insurance/client/user/name/:userName', getClientName)

app.get('/api/insurance/policy/user/name/:userName', getNamePolicy)
app.get('/api/insurance/policy/user/policy/:policyNumber', getPolicyNumber)

module.exports = app
