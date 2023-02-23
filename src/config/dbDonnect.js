import mongoose from "mongoose";

// conexão com banco de dados
mongoose.connect("mongodb+srv://joaopauloj405:1412@node-express.c70sayb.mongodb.net/biblioteca")


// Exportação da conexão com banco de dados
let db = mongoose.connection;
export default db;