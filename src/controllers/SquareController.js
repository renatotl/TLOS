const Squares = require("../models/SquareBD");//trazendo o filme que está cadastrado os dados na tabela no meu banco de dados do arquivo Filmes.js


//rota principal
const getAll = async (req, res) => {//async, aguarda porque eu vou lá fazer a consulta espere as ações para renderizar a página
    try{//tente por esse caminho se der certo
        const SquareBD = await Squares.findAll();//aguardando
        res.render("index",{
            SquareBD,// este nome tem que está igual a linha de cima
            
            
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};


module.exports = {//exportando todas as rotas que a gente usar qui po routes
    getAll,
}