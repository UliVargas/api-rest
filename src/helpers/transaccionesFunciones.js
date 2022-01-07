const axios = require('axios')
const transacciones = []

const values = (data) => {
  data?.map(e => {
    transacciones.push({
      id: e.id,
      total: e.total,
      boleto: e.boleto,
      creacion: e.creacion,
      usuario: e.usuarioUid,
      estacionamiento: e.estacionamientoId
    })
  })
}

const statusEstacionamiento = async () => {
  return await axios.get('https://dev.parcoapp.com/api/Parkings').then(data => data.data)
}

module.exports = {
  transacciones,
  values,
  statusEstacionamiento
}
