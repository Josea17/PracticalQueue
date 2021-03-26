const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Estabelecimento = require("./Estabelecimento");
const Funcionario = require("./Funcionario");

const Fila = db.define("Fila",
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
        qntDeClientes:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tempo:{
            type: DataTypes.TIME,
            allowNull: true
        },
        responsavel:{
            type: DataTypes.STRING,
            allowNull: false
        }, 
        EstabelecimentoId: {
            type: DataTypes.INTEGER,
            references: {
                model: Estabelecimento, 
                key: 'id'
            }
        }
    }
);

//relacionamento entre fila e estabelecimento - n para 1 
Fila.belongsTo(Estabelecimento);
Estabelecimento.hasMany(Fila, {as:"filas"});

module.exports = Fila;