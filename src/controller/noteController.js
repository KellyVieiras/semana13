const AdoteUmPet = require("../models/exemplosSchema")

const getAll = async (req, res) => {
    try {
        const pets = await AdoteUmPet.find()
        res.status(200).json({
            message: "lista de pets cadastrados: ",
            pets
        })
    }
        catch (error) {
            res.status(500).json({message: error.message})
        }
        

        
}

const criarCadastro = async (req, res) => {
                try {
                    const criarDocerias = await Docerias.create(req.body);
                    res.status(201).json({
                        message: "Cadastro realizado com sucesso",
                        criarDocerias
                    })
                } catch (error) {
                    res.status(500).json({message: error.message});
                }
            
}