const { Transacciones, Usuarios } = require("../db");


const getTransacciones = async(req, res) => {
    try {
        const transacciones = await Transacciones.findAll()

        res.status(200).json(transacciones);
    } catch (err) {
        console.log(err);
    }
};

const getTransaccionesId = async(req, res) => {
    try {
        const { id } = req.params;
        
        const transaccion = await Transacciones.findByPk(id);
        if(!transaccion) res.status(404).json(`La trasaccion con id ${id} no existe` )
        res.status(200).json(transaccion);
    } catch (err) {
        console.log(err);
    }
};

const postTransaccion = async(req, res) => {
    try {
        const { uid } = req.params;
        const { total, estacionamientoId, boleto } = req.body
        const usuario = await Usuarios.findByPk(uid);

    if(usuario.saldo > total) {
        const transaccion = await Transacciones.create({
            total, boleto, estacionamientoId
        })
        const nuevoSaldo = usuario.saldo - total;
        await usuario.addTransacciones(transaccion);
        const usuarioUpdated = Usuarios.update({saldo: nuevoSaldo}, {where: { uid }})
        const transaccionCreated = await Transacciones.findByPk(transaccion.id)
    
        res.status(202).json(transaccionCreated);
    }

    res.status(404).json("Saldo insuficiente");
} catch (err) {
        console.log(err);
    }
};


module.exports = {
    getTransacciones,
    getTransaccionesId,
    postTransaccion
};