
const Joi = require("joi");

const schemaPostUsuario = Joi.object({
    nombre: Joi.string().min(3).trim().required(),
    correo: Joi.string().email().required(),
    contrasena: Joi.string().min(5).required(),
    telefono: Joi.number().min(10).required()
})

const schemaPutUsuario = Joi.object({
    nombre: Joi.string(),
    correo: Joi.string().email(),
    telefono: Joi.number(),
    role: Joi.string()
})

const schemaPostSaldoUsuario = Joi.object({
    saldo: Joi.number().required(),
})

const schemaTransacciones = Joi.object({
    uid: Joi.string().required(),
    fechaInicial: Joi.string().required(),
})

const schemaContrasena = Joi.object({
    contrasena: Joi.string().min(5).required(),
    uid: Joi.string().required()
})

module.exports = {
    schemaPostUsuario,
    schemaPostSaldoUsuario,
    schemaTransacciones,
    schemaPutUsuario,
    schemaContrasena
};