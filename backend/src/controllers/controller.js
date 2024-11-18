
// Creación de los controladores

import { productModel } from "../models/model.js";


// POST

export const postProduct = async (request, response) => {
    try {
        const {nombre, descripcion, precio, categoria, estado} = request.body;

        const newProduct = new productModel({
            nombre, descripcion, precio, categoria, estado
        })
        await newProduct.save();

        return response.status(201).json({
            mensaje: "Producto creado correctamente",
            datos: newProduct

        })
    } catch (error) {
        return response.status(400).json({
            mensaje: "Ocurrió un error al crear un producto",
            datos: error.message
        })
    }
}



// GET

export const getProducts = async (request, response) => {

    try {
        const allProducts = await productModel.find()

        if(allProducts.length === 0){
            return response.status(204).json({
                mensaje:"No se encontraron productos en la base de datos",
                datos: null
            })
        }

        return response.status(200).json({
            mensaje: "Estos son todos los productos encontrados",
            cantidadProductos: allProducts.length,
            productos: allProducts
        })



    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un problema al buscar los productos",
            datos: error.message
        })
    }
}


// PUT

export const putProductById = async (request, response) => {
    try {
        let idForPut = request.params.id;
        const dataForUpdate = request.body;

        const productUpdated = await productModel.findByIdAndUpdate(idForPut, dataForUpdate, {
            new: true
        });

        if (!productUpdated) {
            return response.status(404).json({
                mensaje: "Producto no encontrado o no se pudo actualizar"
            });
        }

        return response.status(200).json({
            mensaje: "Se actualizó correctamente",
            datos: productUpdated
        })
        
    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un problema al actualizar el usuario",
            datos: error.message
        })
    }
}


// DELETE

export const deleteProductById = async (request, response) => {
    try {
        let idForDelete = request.params.id;
        const productDeleted = await productModel.findByIdAndDelete(idForDelete);

        if (!productDeleted) {
            return response.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        return response.status(200).json({
            mensaje: "Se eliminó correctamente",
            datos: productDeleted
        })

    } catch (error) {
        return response.status(500).json({
            mensaje: "Ocurrió un problema al eliminar el producto",
            datos: error.message
        })
    }
}