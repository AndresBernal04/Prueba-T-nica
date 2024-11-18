
// Definición de los elementos (esquema)

import mongoose from "mongoose";

const Schema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true

    },

    descripcion:{
        type: String,
        required: true,
    },

    precio:{
        type: Number,
        required: true
    },

    categoria:{
        type: String,
        required: true
    },

    estado:{
        type: String,
        required: true

    }
})

export const productModel = mongoose.model("Item", Schema);