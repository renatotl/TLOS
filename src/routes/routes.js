const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const SquareController = require("../controllers/SquareController");//acessa o controllers


routes.get("/", SquareController.getAll);//listar tudo que tem na rota (cadastrado no banco)




module.exports = routes;//exporto ela para qualquer caminho que nesse caso é FilmeController

