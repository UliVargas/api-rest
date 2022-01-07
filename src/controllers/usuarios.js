const { Usuarios } = require('../db')
const bcrypt = require('bcryptjs')
const { schemaPostUsuario } = require('../schemas/schemas')

const postUsuario = async (req, res) => {
  try {
    const { nombre, telefono, correo, contrasena } = req.body
    const { error } = schemaPostUsuario.validate(req.body)
    if (error) res.json(error)
    else {
      const hash = await bcrypt.hash(contrasena, 10)
      const [usuario, created] = await Usuarios.findOrCreate({
        where: { correo },
        defaults: { nombre, telefono, contrasena: hash }
      })

      if (!created) res.status(404).json('El correo ya existe en la base de datos para otro usuario')

      res.status(201).json(usuario)
    }
  } catch (err) {
    res.json(err)
  }
}

const getUsuarios = async (req, res) => {
  const usuarios = await Usuarios.findAll()
  res.status(200).json(usuarios)
}

const getUsuarioId = async (req, res) => {
  const { uid } = req.params
  const usuario = await Usuarios.findByPk(uid)
  res.status(200).json(usuario)
}

const putUsuario = async (req, res) => {
  try {
    const { uid } = req.params
    const { nombre, telefono, correo, role, contrasena, saldo } = req.body

    if (!contrasena) {
      const usuarioUpdated = await Usuarios.update({
        nombre, telefono, role, correo, saldo
      }, { where: { uid } })
      res.status(201).json(usuarioUpdated)
    } else {
      const hash = await bcrypt.hash(contrasena, 10)
      const usuarioUpdated = await Usuarios.update({
        contrasena: hash, nombre, telefono, role, saldo, correo
      }, { where: { uid } })
      res.status(201).json(usuarioUpdated)
    }
  } catch (err) {
    console.log(err)
  };
}

module.exports = {
  postUsuario,
  getUsuarios,
  getUsuarioId,
  putUsuario
}
