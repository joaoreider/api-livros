

import mongoose from "mongoose";

const Schema = mongoose.Schema;


const LivroSchema = new Schema({
    id: {
        type: String
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    numeroPaginas: {type: Number}

});

const livros = mongoose.model("livros", LivroSchema);

export default livros;