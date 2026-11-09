import mongoose from "mongoose";
const { Schema, model } = mongoose;



const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
    
  },

email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
    unique: true, // Garantiza que no se repitan los correos electrónicos en la base de datos
    lowercase: true,
    index: true, // El indice se crea para mejorar el rendimiento de las consultas en este campo
    match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/, "Por favor ingresa un email válido"], // Validación de formato de correo electrónico
  },

password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
    trim: true,
  },

confirmPassword: {
    type: String,
    // required: true,
    minlength: 6,
    maxlength: 100,
    trim: true,
  },

role: {
    type: String,
    required: true,
    enum: ["user", "admin", "client"], // Define los roles permitidos
    default: "client",
  },

bornDate: {
    type: Date,
   // required: true,
    validate: {
      validator: function (fechaNacimiento) {
        // Validación para asegurarse de que la fecha de nacimiento sea menor a la fecha actual
        if (!fechaNacimiento) return true; // Permitir valores nulos o indefinidos
        return fechaNacimiento < new Date();
      },
      message: "La fecha de nacimiento debe ser una fecha válida en el pasado"
    }
  },

image: {
    type: String,
  },

},

{
  timestamps: true, // Agrega automáticamente los campos createdAt y updatedAt
}
);

const User = model("User", userSchema);
export default User;

//Schema

/*
name
email
password
confirmPassword
role
bornDate
createdAt
updatedAt
image


*/
