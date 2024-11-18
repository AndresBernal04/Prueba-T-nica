// Configuración del servidor

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectionMongo } from "./config/dataBase.js";
import productRouter from "./routes/routes.js";



// Dotenv
dotenv.config();
connectionMongo();

// Express
const app = express();

// Cors
app.use(cors())

// Middleware
app.use(express.json());

// Routes
app.use("/products", productRouter)

// Morgan
app.use(morgan("dev"));

const port = process.env.PORT || 6000
app.listen(port, ()=>{
    console.log(`El puerto se está escuchando en: http://localhost:${port}`);
})