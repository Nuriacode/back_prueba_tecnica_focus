const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customersSchema = new Schema(
  {
    /* declaramos la estructura de cada documento, clave, valor  */
    dni: String,
    Nombre: String,
    Direccion: String,
    CodigoPostal: String,
    Teléfono: String,
    Genero: String,
    FechaNacimiento: String,
    Correo: String,
  },
  { collection: "customers" }
);
/*("nombre de la coleccion", nombre del esquema)*/
const User = mongoose.model("customers", customersSchema);
module.exports = User;