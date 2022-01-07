const express = require('express')
const router = express.Router()

// Importaciones Rutas
const usuarioRouter = require('./usuarios')
const estacionamientoRouter = require('./estacionamientos')
const transaccionesRouter = require('./transacciones')
const sesionRouter = require('./sesion')
const csvTransaccionesRouter = require('./csvTransacciones')

// Rutas

// Usuarios
router.use('/agregar-usuario', usuarioRouter)
router.use('/usuarios', usuarioRouter)
router.use('/editar-usuario', usuarioRouter)

// Estacionamientos
router.use('/estacionamientos', estacionamientoRouter)

// Transacciones
router.use('/transacciones', transaccionesRouter)
router.use('/agregar-transaccion', transaccionesRouter)
router.use('/csv-transacciones', csvTransaccionesRouter)

// Inicio de sesion
router.use('/iniciar-sesion', sesionRouter)

module.exports = router
