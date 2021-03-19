const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Funcionario = db.define("Funcionario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contato:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        senha:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Funcionario;