const json2csv = require('json2csv').parse;
const { Transacciones } = require("../db");
const { schemaTransacciones } = require("../schemas/schemas");
const { Op } = require("sequelize");
const { transacciones, values } = require("../helpers/transaccionesFunciones");

const csvTransacciones = async (req, res) => {
    try {
        const { fechaInicial, fechaFinal } = req.body;
        const { uid } = req.params;
        const { error } = schemaTransacciones.validate({ uid, fechaInicial });
        
        if(error) {
            res.json(error)
        } else {
            if(fechaInicial && fechaFinal) {
                const transaccionesInicialFinal = await Transacciones.findAll({
                    where: {
                        creacion: {
                                [Op.between]: [fechaInicial, fechaFinal] 
                            },
                        usuarioUid: uid
                    }
                });
                //Callback 
                values(transaccionesInicialFinal)
            } else {
                const transaccionesInicial = await Transacciones.findAll({
                    where: {
                        creacion: fechaInicial,
                        usuarioUid: uid
                    }
                });
                //Callback
                values(transaccionesInicial)
            }

            const csvString = json2csv(transacciones);
            res.setHeader('Content-disposition', 'attachment; filename=transacciones.csv');
            res.set('Content-Type', 'text/csv');
            res.status(200).send(csvString);
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = csvTransacciones;