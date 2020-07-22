const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const model = require("./models/index")
const pessoas = require("./routes/pessoas")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
//app.use(express.static(__dirname + '/public/'));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", 'ejs')
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index"))
app.use("/pessoas", pessoas)

//model.sequelize.sync({force: true}).then(() => {
model.sequelize.sync().then(() => {
  app.listen(port,() => console.log("express running"))
})
  