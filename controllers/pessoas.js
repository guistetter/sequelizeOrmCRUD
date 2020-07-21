const index = async({pessoa}, req, res) => {
  const pessoas = await pessoa.findAll()
  res.send(pessoas)
}

module.exports = {
  index
}