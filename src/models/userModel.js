const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    /* declaramos la estructura de cada documento, clave, valor  */
    email: String,
    password: String,
  },
  { collection: "users" }
);
/*("nombre de la coleccion", nombre del esquema)*/
const User = mongoose.model("users", usersSchema);
module.exports = User;