import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";


const router = Router();

// Crear un nuevo usuario
router.post("/users", createUser);



// Login de usuario





// Borrar un usuario por ID





// Obtener un usuario por ID



// Actualizar un usuario por ID




// Obtener todos los usuarios


// Logout de usuario







export default router;

