const {DataTypes} = require("sequelize");
const db = require("../db");

module.exports = db.define("usuario",{
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});