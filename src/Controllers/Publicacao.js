const { model } = require("mongoose");
const Publicacao = model("Publicacoe");

module.exports = {
  async list(req, res) {
    try {
      const data = await Publicacao.find();
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.json({ "ERROR IN": "Api List" });
    }
  },

  async listOne(req, res) {
    const { id } = req.params;
    try {
      const data = await Publicacao.findById(id);
      if (data === null) return res.json({ "ID Not Found": `${id}` });
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.json({ "ERROR IN": "Api listOne" });
    }
  },

  async save(req, res) {
    try {
      const data = await Publicacao.create(req.body);
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.json({ "ERROR IN": "Api save" });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    try {
      const data = await Publicacao.findByIdAndUpdate(id, req.body);
      return res.json(data);
    } catch (err) {
      console.log(err);
      return res.json({ "ERROR IN": "Api update" });
    }
  },

  async remove(req, res) {
    const { id } = req.params;
    try {
      const data = await Publicacao.findByIdAndDelete(id);
      return res.json({ removido: data });
    } catch (err) {
      console.log(err);
      return res.json({ "ERROR IN ID": `Api remove ${id}` });
    }
  }
};
