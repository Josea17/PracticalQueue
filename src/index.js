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

Route("/cliente",app, new Service(Cliente));
Route("/estabelecimento",app, new Service(Estabelecimento));
Route("/fila",app, new Service(Fila));
Route("/filacliente",app, new Service(FilaCliente));
Route("/funcionario",app, new Service(Funcionario));

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



app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})