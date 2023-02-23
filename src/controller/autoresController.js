
import autores from "../models/Autor.js"



class AutorController{

    
    // READ: find para buscar todos os autores
    static listarAutores = (req, res) => {
        autores.find((err, autores)=>{
            res.status(200).json(autores)
        })
    }

    static listarAutor = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autor) => {
            if (!err){

                res.status(200).send(autor);
                
            }else{
                res.status(400).send({message: `${err.message} - autor não encontrado`})
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        
        // criando o autor com os dados da requisição
        let autor = new autores(req.body);

        // commitando
        autor.save((err) => {

            if (err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor`})
            }else{

                res.status(201).send(autor.toJSON())
            }
           
        })
        
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){

                res.status(200).send({message: 'autor atualizado com sucesso'})
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao atualizar autor`})
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err){

                res.status(200).send({message: 'autor deletado com sucesso'})
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao deletar autor`})
            }
        })
    }
}

export default AutorController