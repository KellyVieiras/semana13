const mongoose = require("mongoose")

const adoteumpetSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        requirired: true
    },
    cidade: {
        type: String,
        required: true,
    },
    animal: {
        type: String,
        required: true
    }
}, { timesstamps: true})

const AdoteUmPet = mongoose.model("pet", adoteumpetSchema)
module.exports = AdoteUmPet