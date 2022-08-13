const  Sequelize  = require("sequelize");//importação do sequelize
const database = require("../database/bd");//importar a conexão com a model

// all names need to be equal in the data bank

const Squares = database.define(
    //nome da tabela do postgres
    "squares",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
    
         imagem:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    },


    {
        freezeTableName: true, //o nome da tabela seja o mesmo que eu criei no  ou da linha 8
        timestamps: false,//registrar a criação de tempo e data false no caso não registra
        createdAt: false,
        updateAt: false,
    } 

    );

const initTable =async () =>{

    await Squares.sync();
}

initTable()

module.exports = Squares;//exportar o SquareBD


