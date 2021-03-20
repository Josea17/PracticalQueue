const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");


const Cliente = db.define("Cliente",
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
        sobrenome:{
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



//relacionamento entre funcionario e cliente - 1 para 1
Cliente.belongsTo(funcionario);

module.exports = Cliente;