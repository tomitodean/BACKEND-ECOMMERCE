import User from "../models/user.model.js";

async function createUser(req, res) {

try {
   const newUser = new User(req.body);

await newUser.save();

// Lógica para crear un nuevo usuario
return res.send("Usuario creado");

} catch (error) {
    console.error("Error al crear el usuario:", error);
    return res.status(500).send("Error al crear el usuario");
}


}


































function loginUser(req, res) {
  // Lógica para el login de usuario
  res.send("Usuario logueado");
}

function deleteUser(req, res) {
  const userId = req.params.id;
  // Lógica para borrar un usuario por ID
  res.send(`Usuario con ID ${userId} borrado`);
}

function getUser(req, res) {
  const userId = req.params.id;
  // Lógica para obtener un usuario por ID
  res.send(`Usuario con ID ${userId} obtenido`);
}

function updateUser(req, res) {
  const userId = req.params.id;
  // Lógica para actualizar un usuario por ID
  res.send(`Usuario con ID ${userId} actualizado`);
}

function logoutUser(req, res) {
  // Lógica para el logout de usuario
  res.send("Usuario deslogueado");
}




export { createUser, loginUser, deleteUser, getUser, updateUser, logoutUser };