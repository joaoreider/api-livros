import livros from "../models/Livro.js"



class LivroController{

    
    // READ: find para buscar todos os livros
    static listarLivros = (req, res) => {
        livros.find((err, livros)=>{
            res.status(200).json(livros)
        })
    }

    static listarLivro = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livro) => {
            if (!err){

                res.status(200).send(livro);
                
            }else{
                res.status(400).send({message: `${err.message} - Livro não encontrado`})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        
        // criando o livro com os dados da requisição
        let livro = new livros(req.body);

        // commitando
        livro.save((err) => {

            if (err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`})
            }else{

                res.status(201).send(livro.toJSON())
            }
           
        })
        
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err){

                res.status(200).send({message: 'Livro atualizado com sucesso'})
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao atualizar livro`})
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err){

                res.status(200).send({message: 'Livro deletado com sucesso'})
                
            }else{
                res.status(500).send({message: `${err.message} - falha ao deletar livro`})
            }
        })
    }
}

export default LivroController