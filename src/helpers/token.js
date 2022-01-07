require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateAccessToken = (usuario) => {
  try {
    return jwt.sign({
      uid: usuario.uid,
      role: usuario.role
    }, process.env.SECRET)
  } catch (error) {
    console.log(error)
    return null
  }
}

const verifyToken = async (accessToken) => {
  try {
    return jwt.verify(accessToken, process.env.SECRET)
  } catch (error) {
    return null
  }
}

module.exports = {
  generateAccessToken,
  verifyToken
}
