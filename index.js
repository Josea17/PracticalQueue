const Sequelize = require("sequelize");
const db = require("./db");
const Cliente = require("./model/Cliente");

async function sincronizar() {
  await db.sync();
}

async function inserir() {
  await Cliente.create({nome:"José", sobrenome:"Lucena", contato:"40028922", senha:"senha123"});
}

async function consultar() {
  const cl = await Cliente.findAll();
  console.log(cl);
}

// sincronizar();
// inserir();
 consultar();