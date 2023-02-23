

import mongoose, { mongo } from "mongoose";

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
        type: mongoose.Schema.Types.ObjectId,
        ref:'autores',
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