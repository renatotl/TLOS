const Sequelize = require("sequelize");

// delpoy no heroku use este código

// const sequelize = new Sequelize(process.env.DATABASE_URL, {   
//   dialect: "postgres", 
//   dialectOptions: {
//     ssl: {
//         require: true,
//         rejectUnauthorized: false,
//     },
//   },
// });


// caso for usar no localhost use este código
const sequelize = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
      host: process.env.DB_HOST,
      port: 5432, 
      dialect: "postgres"
  }
);

module.exports = sequelize;
// these code we can write in the index.js, but we do not do to not pollui it