const express = require("express");
const router = express.Router();

//Importaciones Rutas
const usuarioRouter = require("./usuarios");
const estacionamientoRouter = require("./estacionamientos");
const transaccionesRouter = require("./transacciones");


//Rutas

//Usuarios
router.use("/agregar-usuario", usuarioRouter);
router.use("/usuarios", usuarioRouter);
router.use("/editar-usuario", usuarioRouter);

//Estacionamientos
router.use("/estacionamientos", estacionamientoRouter);

//Transacciones
router.use("/transacciones", transaccionesRouter);
router.use("/agregar-transaccion", transaccionesRouter);


module.exports = router;