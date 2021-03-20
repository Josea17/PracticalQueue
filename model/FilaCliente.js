const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Fila = require("./Fila");
const Cliente = require("./Cliente");

const FilaCliente = db.define("FilaCliente",
    {
        ClienteId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Cliente, 
                key: 'id'
            }
        },
        FilaId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Fila, 
                key: 'id'
            }
        },
        basico: DataTypes.BOOLEAN
    }
);

Fila.belongsToMany(Cliente, {through:FilaCliente});
Cliente.belongsToMany(Fila, {through:FilaCliente})
module.exports = FilaCliente;