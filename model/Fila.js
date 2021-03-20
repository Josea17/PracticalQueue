const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

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
            allowNull: false
        },
        tempo:{
            type: DataTypes.TIME,
            allowNull: false
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
        },
        FuncionarioId: {
            type: DataTypes.INTEGER,
            references: {
                model: Funcionario, 
                key: 'id'
            }
        }
    }
);

//relacionamento entre fila e estabelecimento - n para 1 
Fila.belongsTo(Estabelecimento);
Estabelecimento.hasMany(Fila, {as:"filas"});

//relacionamento entre fila e funcionario - n para 1 
Fila.belongsTo(Funcionario);
Funcionario.hasMany(Fila, {as:"filas"});

module.exports = Fila;