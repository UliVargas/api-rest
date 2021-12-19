const { Usuarios } = require("../db");
const bcrypt = require("bcryptjs");
const { schemaPostUsuario, schemaPutUsuario } = require("../schemas/schemas");


const postUsuario = async(req, res) => {
    try {
        const { nombre, telefono, correo, contrasena } = req.body;
        const { error } = schemaPostUsuario.validate(req.body);
            if(error) res.json(error);
            else {
                const hash = await bcrypt.hash(contrasena, 10);
                const [usuario, created] = await Usuarios.findOrCreate({
                    where: { correo }, 
                    defaults: { nombre, telefono, contrasena: hash }
                })
                
                if(!created) res.status(404).json("El correo ya existe en la base de datos para otro usuario")
                
                res.status(201).json(usuario);
            }
    } catch (err) {
        res.json(err);
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
        let { nombre, telefono, correo, role } = req.body;
    
        if(!role) {
            //Actualiza el usuario y la variable obtiene el valor de 1
            const usuarioUpdated = await Usuarios.update({
                nombre, telefono, correo
            }, { where: { uid } });
            
            //Si en la variable de edicion se guarda si se actualizó el usuario, busca y encuentra los nuevos datos y los retorna. Caso contrario, regresa un mensaje con una respuesta de rechazo. 
            if(usuarioUpdated) {
                const usuario = await Usuarios.findByPk(uid);
                res.status(202).json(usuario);
            } else res.status(404).json("El usuario no se actualizó correctamente");
        } else {
            const usuarioUpdated = await Usuarios.update({
                role
            }, { where: { uid } });

            if(usuarioUpdated) {
                const usuario = await Usuarios.findByPk(uid);
                res.status(202).json(usuario);
            } else res.status(404).json("El usuario no se actualizó correctamente");
        }
        

    } catch (err) {
        console.log(err);
    };
};

module.exports = {
    postUsuario,
    getUsuarios,
    getUsuarioId,
    putUsuario
};