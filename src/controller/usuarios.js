const { Usuarios } = require("../db");

const postUsuario = async(req, res) => {
    try {
        const { nombre, telefono, correo, contrasena, saldo } = req.body;
        const [usuario, created] = await Usuarios.findOrCreate({
                where: { correo }, 
                defaults: { nombre, telefono, contrasena }
            })

        if(!created) res.status(404).json("El correo ya existe en la base de datos para otro usuario")

        res.status(201).json(usuario);
    } catch (err) {
        console.log(err);
    }
};

const getUsuarios = async(req, res) => {
    const usuarios = await Usuarios.findAll();
    res.status(200).json(usuarios);
};

const getUsuarioId = async(req, res) => {
    const { uid } = req.params;

    const usuario = await Usuarios.findByPk(uid);
    res.status(200).json(usuario);
};

const putUsuario = async(req, res) => {
    try {
        const { uid } = req.params;
        const { nombre, telefono, correo, contrasena, saldo } = req.body;
        
        if(saldo) {
            const usuarioUpdated = await Usuarios.update({ saldo }, { where: { uid } })
            const usuario = await Usuarios.findByPk(uid);
            res.status(202).json(usuario);
        }
        
        const usuarioUpdated = await Usuarios.update({
            nombre, telefono, correo, contrasena
        }, { where: { uid } })
        
        const usuario = await Usuarios.findByPk(uid);
        res.status(202).json(usuario);

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    postUsuario,
    getUsuarios,
    getUsuarioId,
    putUsuario
};