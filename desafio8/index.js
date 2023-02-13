//Importamos dependencias
// import mongoose, { mongo } from "mongoose";


//Creamos constantes 'mensajes' y 'productos'
const products = [
    {name: 'product1', price: 500, stock: 130, src: './product1.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product2', price: 4800, stock: 35, src: './product2.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product3', price: 2600, stock: 88, src: './product3.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product4', price: 1850, stock: 94, src: './product4.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product5', price: 3200, stock: 12, src: './product5.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product6', price: 3000, stock: 140, src: './product6.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product7', price: 4900, stock: 42, src: './product7.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product8', price: 950, stock: 68, src: './product8.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product9', price: 2050, stock: 27, src: './product9.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {name: 'product10', price: 1400, stock: 116, src: './product10.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
];

const messages = [
    {user: {name: 'user1', email: 'user1@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user2', email: 'user2@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user3', email: 'user3@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user4', email: 'user4@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user5', email: 'user5@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user6', email: 'user6@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user7', email: 'user7@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user8', email: 'user8@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user9', email: 'user9@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
    {user: {name: 'user10', email: 'user10@mail.com'}, date: new Date().toDateString(), text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas.'},
];

//Esquema de datos
/* 
const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    src: {type: String, required: true},
    descr: {type: String, required: true}
});

const messagesSchema = new mongoose.Schema({
    user: {
        name: {type: String, required: true},
        email: {type: String, required: true}
    },
    date: {type: Date, default: Date.now },
    text: { type: String, required: true }
});
 */
//Creamos el modelo
// const productsModel = mongoose.model( 'products', productsSchema );
// const messagesModel = mongoose.model( 'messages', messagesSchema );

/* 
await mongoose.connect('mongodb://127.0.0.1/ecommerce', {
    serverSelectionTimeoutMS: 5000
});


//Cargamos Productos
const insertedProducts = [];
const insertedMessages = [];

for (const product of products) {
    insertedProducts.push(productsModel.create(product));
};

for (const message of messages) {
    insertedMessages.push(messagesModel.create(message));
};


//Resultados

const productsResult = await Promise.allSettled(insertedProducts);
const messagesResult = await Promise.allSettled(insertedMessages);

const rejectedProducts = productsResult.filter( r => r.status == 'rejected');
const rejectedMessages = messagesResult.filter( r => r.status == 'rejected');

(rejectedProducts.length > 0) ? console.log(`There´s ${rejectedProducts.length} failures on "products".`) : console.log('There´s no failures on "products".');
(rejectedMessages.length > 0) ? console.log(`There´s ${rejectedMessages.length} failures on "messages".`) : console.log('There´s no failures on "messages".');
*/

// --------------------------------------------------- MONGO DB --------------------------------------------------------------------
//Importamos dependencias
import { MongoClient } from 'mongodb';


//Conectamos a la DB
const client = await MongoClient.connect(
    'mongodb://127.0.0.1/ecommerce',
    { serverSelectionTimeoutMS: 5000, useNewUrlParser: true, useUnifiedTopology: true }
);
console.log('Connected!');

const productsCollection = client.db('ecommerce').collection('products');
const messagesCollection = client.db('ecommerce').collection('messages');

//Punto 3
/* 

const resultProducts = await productsCollection.find().toArray();
const resultMessages = await messagesCollection.find().toArray();

console.table(resultProducts);
console.log(resultProducts.length); //Punto 4
console.log(resultMessages);
console.log(resultMessages.length); //Punto 4

*/

//Punto 5

/* 
    5 A)

const newProduct = {name: 'newProduct', price: 1000, stock: 250, src: './newProduct.jpg', descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}

await productsCollection.insertOne(newProduct);

    5 B) 

I)
const result = await productsCollection.find({
    price: { $lt: 1000 } 
});

II)
const result = await productsCollection.find({
    'price': {
        '$gt': 1000,
        '$lt': 3000 
    }
});

III)
const result = await productsCollection.find({
    price: { $gt: 3000 } 
});

IV)
const sort = {
    'price': 1
};
const skip = 2;
const result = await productsCollection.findOne( {}, {sort, skip} ).name;


    5 C)
    
await productsCollection.updateMany(
    {}, //Update All
    { $set: { status: "Modified" } } //Add the 'status' property
);

    5 D)

await productsCollection.updateMany(
    { price: { $gt: 4000 } }, //Products which Price > 4000
    { $set: { stock: 0 } } //Set the price to 0    
);

    5 E)

await productsCollection.deleteMany({ price: {$lt: 1000} });

*/

//Punto 6

/* ((ARCHIVO TXT))

db.createUser({ user: 'pepe', pwd: 'asd456', roles: [{role: "read", db: "ecommerce"}]})

*/
