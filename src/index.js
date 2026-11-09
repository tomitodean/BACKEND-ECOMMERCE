
// import express framework
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import mongoose from "mongoose";
import dns from "dns";

dns.setServers( ["8.8.8.8", "8.8.4.4"] );


const MONGODB_URI = process.env.MONGODB_URI

const PORT = process.env.PORT || 3000; 



mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Conexión a MongoDB exitosa");
    })
    .catch((error) => {
        console.error("Error al conectar a MongoDB:", PORT, error);
    });








// Inicializar el servidor y ponerlo a escuchar en el puerto 3000
app.listen(PORT, () => {
    console.log(`Server funcionando en puerto http://localhost:${PORT}`);
})
