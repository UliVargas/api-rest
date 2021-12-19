const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("usuarios", {
        uid: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasena: {
            type: DataTypes.STRING,
            allowNull: false
        },
        saldo: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0
        },
        accessToken: {
            type: DataTypes.STRING
        },
        creacion: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user"
        }
    })
};