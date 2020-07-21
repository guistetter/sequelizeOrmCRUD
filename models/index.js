const Sequelize = require("sequelize")

const sequelize = new Sequelize("cadastroOrm", "root", "123456",{
  dialect: "mysql",
  host: "127.0.0.1"
})

sequelize.import('./pessoa.js')
module.exports = sequelize
//teste conexao 
//sequelize.sync().then(() => console.log("synced"))
//sequelize.authenticate().then(() => console.log("ok"))

// const Pessoa = sequelize.define("Pessoa", {
//   nome: Sequelize.STRING, 
//   cargo: Sequelize.STRING
// })

// sequelize.sync().then(() => console.log("synced"))

//sequelize.import("./pessoa.js")


/*
"mysql2": "^1.6.5",
    "sequelize": "^5.8.6"

*/