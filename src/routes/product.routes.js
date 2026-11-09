import { Router } from "express";
import {
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct

} from "../controllers/product.controller.js";

const router = Router();

// rutas para productos
// obtener todos los productos
router.get("/products", getProducts);

// obtener un producto por su ID
router.get("/products/:id", getProductById);

// crear un nuevo producto
router.post("/products", createProduct);

// actualizar un producto
router.put("/products/:id", updateProduct);

// eliminar un producto
router.delete("/products/:id", deleteProduct);




export default router;