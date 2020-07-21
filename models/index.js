const Sequelize = require("sequelize")

const sequelize = new Sequelize("cadastroOrm", "root", "123456",{
  dialect: "mysql",
  host: "127.0.0.1"
})

const models = {}
const fs = require('fs')
const path = require("path")
const { index } = require("../controllers/pessoas")
fs
  .readdirSync(__dirname)
  .filter((file) => file!== 'index.js')
  .forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file))
  models[model.name] = model
    console.log(model.name)
})

const pessoa = 

module.exports = {
  sequelize,
  models
}
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