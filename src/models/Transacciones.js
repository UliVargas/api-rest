const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("transacciones", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estacionamientoId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        boleto: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
};