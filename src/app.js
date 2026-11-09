import express from "express";
import productRoutes from "./routes/product.routes.js";


// inicilizar la aplicacion Express
const app = express();


app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

app.use(productRoutes);





export default app;