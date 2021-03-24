const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Estabelecimento = require("./Estabelecimento");
const Fila = require("./Fila");
const Cliente = require("./Cliente");

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
        },
        EstabelecimentoId: {
            type: DataTypes.INTEGER,
            references: {
                model: Estabelecimento, 
                key: 'id'
            },
            FilaId: {
            type: DataTypes.INTEGER,
            references: {
                model: Fila, 
                key: 'id'
            }
        },
         ClienteId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cliente, 
                key: 'id'
            }
        }
        }
    }
);

//relacionamento entre funcionario e estabelecimento - n para 1
Funcionario.belongsTo(Estabelecimento);
Estabelecimento.hasMany(Funcionario, {as:"funcionarios"});

//relacionamento entre funcionario e fila - n para 1
Funcionario.belongsTo(Fila);
Fila.hasMany(Funcionario, {as:"funcionarios"});

//relacionamento entre funcionario e cliente - 1 para 1
//Funcionario.belongsTo(Cliente);

module.exports = Funcionario;