const { Usuarios } = require("../db");
const { schemaPostSaldoUsuario } = require("../schemas/schemas");

const putSaldoUsuario = async(req, res) => {
    try {
        const { uid } = req.params;
        const { saldo } = req.body;
        const { error } = schemaPostSaldoUsuario.validate(req.body)
        if(error) res.json(error);
        else {
            if(saldo) {
                const usuarioUpdated = await Usuarios.update({ saldo }, { where: { uid } });
                const usuario = await Usuarios.findByPk(uid);
                res.status(201).json(usuario);
            };
        }

    } catch (err) {
        res.json(err);
    };
};

module.exports = putSaldoUsuario;