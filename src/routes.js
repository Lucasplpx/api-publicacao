const { Router } = require("express")
const routes = Router()

const Publicacao = require("./controllers/Publicacao")

routes.get("/publicacoes", Publicacao.list)
routes.get("/publicacoes/:id", Publicacao.listOne)
routes.post("/publicacoes", Publicacao.save)
routes.put("/publicacoes/:id", Publicacao.update)
routes.delete('/publicacoes/:id', Publicacao.remove)

module.exports = routes