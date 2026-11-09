import express from "express";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";

// inicilizar la aplicacion Express
const app = express();


app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

app.use(productRoutes);

app.use(userRoutes);



export default app;