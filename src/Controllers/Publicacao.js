const { model } = require("mongoose");
const Publicacao = model("Publicacoe");

module.exports = {
  main(req, res) {
    let data = [
      {
        title: "Welcome api publicacoes !!!"
      },
      {
        routes: [
          {
            ListAll: "/publicacoes",
            Method: "get"
          },
          {
            ListOne: "/publicacoes/5d5ddab8b0ebeb325058c67b",
            Method: "get"
          },
          {
            Save: "/publicacoes",
            Method: "post",
            info: "Send json body"
          },
          {
            Update: "/publicacoes/5d607d27e3c56120acd749a3",
            Method: "put",
            info: "Send json body"
          },
          {
            Delete: "/publicacoes/5d607b1118a8852e4c383d16",
            Method: "delete"
          }
        ]
      }
    ];

    return res.json(data)
  },
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
