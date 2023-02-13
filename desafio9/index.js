//Importamos dependencias
import express from "express";
import mongoose from "mongoose";
import productsTestRouter from "./routes/products-test.router.js";
import messagesRouter from "./routes/messages.router.js";

const app = express();

app.use('/api/products-test', productsTestRouter);
app.use('/api/messages', messagesRouter);

app.get('/', (req, res) => {
    res.send('DESAFIO 9.')
});

//Connecting
await mongoose.connect('mongodb+srv://fran:123@desafioscoder.mvzoxge.mongodb.net/desafiosCoder?retryWrites=true&w=majority', {
    serverSelectionTimeoutMS: 5000
});

//Esquema de datos
const messagesSchema = new mongoose.Schema({
    user: {
        name: {type: String, required: true},
        email: {type: String, required: true}
    },
    date: {type: Date, default: Date.now },
    text: { type: String, required: true }
});

//Creamos el modelo
const messagesModel = mongoose.model( 'messages', messagesSchema );

export const messages = await messagesModel.find({});
// console.log(messages);

app.listen(8080, () => console.log(`http://localhost:8080`));