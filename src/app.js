const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/index')
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Cors
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// Routes
app.use('/api', routes)

module.exports = app
