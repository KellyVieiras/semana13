const express = require("express")
const router = express.Router()
const controller = require("../controller/exemplosController")


router.get("/", (req,res) => {
    res.status(200).send({
        title: "Projeto final - Adote um pet",
        version: "1.0.0",
        message: "Me leva para casa que dou amor"
    })
})
router.get("/todos", controller.getAll)
router.post("/criar", controller.criarCadastro)
router.put("/atualizar/:id", controller.atualizarCadastro)
router.delete("/deletar/:id", controller.deletarCadastro)
router.get("/todos/:id", controller.buscarId)
module.exports = router