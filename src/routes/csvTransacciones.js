const express = require('express')
const router = express.Router()
const csvTransacciones = require('../controllers/csvTransacciones')
const { validateTokenAdmin } = require('../middleware/validateToken')

router.post('/:uid', validateTokenAdmin(['admin']), csvTransacciones)

module.exports = router
