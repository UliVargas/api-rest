const { Usuarios } = require("../db");
const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../helpers/token");

const sesionUsuario = async (req, res) => {
    const {correo, contrasena} = req.body;
    const usuario = await Usuarios.findOne({where: { correo }});
    
    if(usuario) {
        const valid = await bcrypt.compare(contrasena, usuario.contrasena);
        
        const accessToken = generateAccessToken(usuario);

        if(valid) {
            const usuarioToken = await Usuarios.update({ accessToken }, {where: { correo }});
            res.json({
                data: usuarioToken,
                accessToken
            })
        }
        else res.json("Error en las credenciales, intente de nuevo");
    } else {
        res.json({msg: "No se encuentra registrado ningún usuario con el correo ingresado"});
    }
}

module.exports = sesionUsuario;