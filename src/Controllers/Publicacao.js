const { model } = require("mongoose")
const Publicacao = model("Publicacoe")

module.exports = {

  async list(req, res) {
    const data = await Publicacao.find()
    return res.json(data)
  },

  async listOne(req, res) {
    const { id } = req.params
    const data = await Publicacao.findById(id)
    return res.json(data)
  },

  async save(req, res) {
    const data = await Publicacao.create(req.body)
    return res.json(data)
  },

  async update(req, res) {
    const { id } = req.params
    const data = await Publicacao.findOneAndUpdate(id, req.body, { new: true })
    return res.json(data)
  },

  async remove(req, res) {
    const { id } = req.params
    try {
      const data = await Publicacao.findByIdAndDelete(id)
      return res.json({ removido: data })
    } catch (err) {
      return res.json({ removido: false })
    }

  }


}