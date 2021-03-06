require('dotenv').config()
const { Usuarios } = require('../db')
const { verifyToken } = require('../helpers/token')

const validateToken = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(' ')[1]
  const dataToken = await verifyToken(accessToken)
  if (!accessToken && !dataToken) res.status(400).json('Acceso Denegado')
  else next()
}

const validateTokenAdmin = (roles) => async (req, res, next) => {
  const accessToken = req.headers.authorization.split(' ')[1]
  const dataToken = await verifyToken(accessToken)
  const usuarioData = await Usuarios.findByPk(dataToken.uid)

  if (roles.includes(usuarioData.role)) {
    next()
  } else res.json('Acceso Denegado')
}

module.exports = { validateToken, validateTokenAdmin }
