const bcrypt = require("bcryptjs");
const { Usuarios } = require("../db");
const { schemaContrasena } = require("../schemas/schemas");


const putContrasenaUsuario = async(req, res) => {
    try {
        const { uid } = req.params;
        const { contrasena } = req.body;
        const { error } = schemaContrasena.validate({contrasena, uid});
        
        if(!error) {
            //hasheo la contraseña que me pasan por body antes de guardarla en la base de datos
            const hash = await bcrypt.hash(contrasena, 10);
            
            //Actualiza el usuario y la variable obtiene el valor de 1
            const usuarioUpdated = await Usuarios.update({
                contrasena: hash,
            }, { where: { uid } });
            
            //Si en la variable de edicion se guarda si se actualizó el usuario, busca y encuentra los nuevos datos y los retorna. Caso contrario, regresa un mensaje con una respuesta de rechazo. 
            if(usuarioUpdated) {
                const usuario = await Usuarios.findByPk(uid);
                res.status(202).json(usuario);
            } else res.status(404).json("El usuario no se actualizó correctamente");
        } else res.json(error)

    } catch (err) {
        console.log(err);
    };
};

module.exports = putContrasenaUsuario;