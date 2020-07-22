const index = async({Pessoa}, req, res) => {
  const pessoas = await Pessoa.findAll()
  res.send(pessoas)
}

const createForm = (req, res) => {
  res.render("pessoas/create")
}

const createProcess = async({Pessoa}, req, res) => {
  await Pessoa.create(req.body)
  res.redirect("/pessoas")
}

module.exports = {
  index, createForm, createProcess
}