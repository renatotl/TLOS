const express = require("express");
// const res = require("express/lib/response");

const app = express();// a const APP terá todas as nossas dependências do express

const path = require("path");//importando uma lib do proprio express chamada path  essencial link o frontend com o backend
// monstrando o caminho


const routes = require('./src/routes/routes');// mostrando onde está minhas rotas

app.use(express.urlencoded());//navegador envia as informações pelo json e essas informçãoes vem do body pega as informações que o cliente digitou no unput e envia pelo json 
// meu computador consegue ler json


app.set("view engine", "ejs"); //mortor engine da view é o ejs essencial
//informando qual motor vou usar

app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta 
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar


app.use(routes);


//app.use faz o nosso app usar os arquivos estáticos html e JS para front esses arquivos estáticos estão em path.join para juntar __dirname nome da pasta principal(,) nome da past a que é public
//A gora nosso servidor sabe onta está os arquivos estáticos


const port = process.env.PORT || 3000; //esse code é pro heroko
// ele pode uar o caminho do heroku ou localhost

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));//ouvindo a porta 3000, rodando nessa porta
