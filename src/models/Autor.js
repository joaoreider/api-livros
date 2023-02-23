
import mongoose from "mongoose";

const Schema = mongoose.Schema;


const AutorSchema = new Schema({
    id: {
        type: String
    },
    nome: {
        type: String,
        required: true
    },
    nacionalidade: {
        type: String
    },


  
});

const autores = mongoose.model("autores", AutorSchema);

export default autores;