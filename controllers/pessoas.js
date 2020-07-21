const model = require("../models/index")
const index = async(req, res) => {
  const pessoas = await model.models.pessoa.findAll()
  res.send(pessoas)
}

module.exports = {
  index
}