const { statusEstacionamiento } = require("../helpers/transaccionesFunciones");

const getEstacionamientos = async(req, res) => {
    const estacionamientos  =  await statusEstacionamiento();

    res.status(200).json(estacionamientos);
};

module.exports = getEstacionamientos;