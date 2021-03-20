const Sequelize = require("sequelize");
const db = require("./db");
const Cliente = require("./model/Cliente");
const Estabelecimento = require("./model/Estabelecimento");
const Funcionario = require("./model/Funcionario");
const Fila = require("./model/Fila");

async function sincronizar() {
  await db.sync();
}

async function inserir() {
  await Fila.create({nome:"Fila do barbeiro", qntDeClientes: "10", tempo:"03:45:00", responsavel:"Fulano"});
}

async function consultar() {
  const cl = await Fila.findAll();
  console.log(cl);
}

//sincronizar();
//inserir();
consultar();

