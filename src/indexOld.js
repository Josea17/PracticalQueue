require('dotenv').config()
const Sequelize = require("sequelize");
const db = require("./db");
const Cliente = require("./model/Cliente");
const Estabelecimento = require("./model/Estabelecimento");
const Funcionario = require("./model/Funcionario");
const Fila = require("./model/Fila");
const FilaCliente = require("./model/FilaCliente");

async function sincronizar() {
  await db.sync({});
}

async function inserir() {
  let estabelecimento = {nome: "Farmacia", email: "farmacia1@email.com", contato: 123456789, senha: "senha123"};
    estabelecimento = await Estabelecimento.create(estabelecimento);
  
    Fila.create(({nome:"Fila da farmacia", qntDeClientes: "1", tempo:"00:5:00", responsavel:"Fulano"}));

}

async function inserir() {
  let estabelecimento = {nome: "Farmacia"};
    estabelecimento = await Estabelecimento.create(estabelecimento);
    Fila.create({nome:"Fila da farmacia", principalId: estabelecimento.id}); 
    
}

async function consultar() {
  const cl = await Fila.findAll();
  console.log(cl);
}

sincronizar();
//inserir();
//consultar();

