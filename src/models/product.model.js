// En el modelo vamos a definir la estructura de los documentos que se almacenarán en la colección de productos en MongoDB. Esto nos permite tener un esquema consistente y realizar validaciones antes de guardar los datos.

import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },

    description: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200,
        trim: true,
    },
    stock: {
        type: Number,
        min: 0,
        default: 0,
    },

    Image: {
        type: String,
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,  // Esto establece la fecha de creación del producto al momento de guardarlo en la base de datos.
    }

}, {
    timestamps: true, // Esto agrega automáticamente los campos createdAt y updatedAt a cada documento.
    versionKey: false,
});


const Product = mongoose.model("Product", productSchema);


export default Product;