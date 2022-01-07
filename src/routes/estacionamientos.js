const express = require('express')
const router = express.Router()
const getEstacionamiento = require('../controllers/estacionamientos')
const { validateToken } = require('../middleware/validateToken')

router.get('/', validateToken, getEstacionamiento)

module.exports = router
