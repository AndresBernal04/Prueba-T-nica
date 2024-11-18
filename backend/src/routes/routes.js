
// Definición de Rutas

import { Router } from "express";
import { postProduct, getProducts, putProductById, deleteProductById } from "../controllers/controller.js";

const productRouter = Router();

productRouter.post("/", postProduct);
productRouter.get("/", getProducts);
productRouter.put("/:id", putProductById);
productRouter.delete("/:id", deleteProductById);

export default productRouter;