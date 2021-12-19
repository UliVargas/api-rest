const { Transacciones, Usuarios } = require("../db");
const { statusEstacionamiento } = require("../helpers/transaccionesFunciones");

const getTransacciones = async(req, res) => {
    try {
        const transacciones = await Transacciones.findAll();

        res.status(200).json(transacciones);
    } catch (err) {
        console.log(err);
    };
};

const getTransaccionesId = async(req, res) => {
    try {
        const { uid } = req.params;
        
        const transaccion = await Transacciones.findAll({where: { usuarioUid: uid }});
        if(!transaccion) res.status(404).json(`La trasaccion con id ${uid} no existe`);
        res.status(200).json(transaccion);
    } catch (err) {
        console.log(err);
    };
};

const postTransaccion = async(req, res) => {
    try {
        const { uid } = req.params;
        const { total, estacionamientoId, boleto } = req.body
        const usuario = await Usuarios.findByPk(uid);
        const estacionamientos = await statusEstacionamiento();
        const estacionamientoStatus = estacionamientos?.find(e => e.id === estacionamientoId);

        if(estacionamientoStatus.status === 0) {
            if(usuario.saldo >= Number(total)) {
                const transaccion = await Transacciones.create({
                    total, boleto, estacionamientoId
                });
                const nuevoSaldo = usuario.saldo - total;
                await usuario.addTransacciones(transaccion);
                const usuarioUpdated = Usuarios.update({saldo: nuevoSaldo}, {where: { uid }});
                const transaccionCreated = await Transacciones.findByPk(transaccion.id);
            
                res.status(202).json(transaccionCreated);
            } else res.status(404).json("Saldo insuficiente");
        } else res.json({msg: "No se puede pagar en este estacionamiento"});
} catch (err) {
        console.log(err);
    };
};


module.exports = {
    getTransacciones,
    getTransaccionesId,
    postTransaccion
};