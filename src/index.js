require('dotenv').config()
const Route = require('./routes/RouteGeneric');
const Service = require('./service/ServiceGeneric');
const express = require("express"); 
const cors = require('cors');

const Cliente = require('./model/Cliente');
const Estabelecimento = require('./model/Estabelecimento');
const Fila = require('./model/Fila');
const FilaCliente = require('./model/FilaCliente');
const Funcionario = require('./model/Funcionario');

const bcryptjs = require("bcryptjs");
const Usuario = require('./model/Usuario');
const jwt = require("jsonwebtoken");
const authorization = require("./authorization")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: 'API de Filas ativa!!!' })
});

/*app.get("/livro", async (req, res) => {
  let livros = await Livro.findAll(); 
  res.json(livros);
});
app.get("/livro/:id", async (req, res) => {
  let livro = await Livro.findByPk(req.params.id); 
  res.json(livro);
});
*/

Route("/cliente",app, new Service(Cliente), authorization);
Route("/estabelecimento",app, new Service(Estabelecimento), authorization);
Route("/fila",app, new Service(Fila), authorization);
Route("/filacliente",app, new Service(FilaCliente), authorization);
Route("/funcionario",app, new Service(Funcionario), authorization);


app.get("/livro/:id/edicao", async (req, res) => {
  const edicoes = await Edicao.findAll({where:{LivroId:req.params.id}});
  res.send({edicoes});
});

app.get("/livro/:id/disciplina", async (req, res) => {
  const disciplinas = await Livro.findAll(
    {
      where:{id:req.params.id}, 
      include:[
        {model: Disciplina, as:'disciplinas'}
      ]
    }
  );
  res.send(disciplinas)
}) 

async function gerarHash(password) {
  return await bcryptjs.hash(password, 10)
}

app.post("/cadastrar", async (req, res) => {
  const {email, password} = req.body;
  const u = await Usuario.create({email, password:(await gerarHash(password))});
  u.password = undefined;
  res.send(u);
})

app.post("/autenticar", async (req, res) => {
  const {email, password} = req.body;
  const usu = await Usuario.findByPk(email);
  if(!usu || !password) {
    res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(password, usu.password)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn:3600}
    );
    res.send({email, token})
  } else {
    res.status(400).send("Credenciais inválidas")
  }
})

async function sincronizar() {
  await Fila.sync({force: True});
}

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})

//sincronizar();