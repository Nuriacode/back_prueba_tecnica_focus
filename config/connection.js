const mongoose = require("mongoose");

const dbConnect = () => {

  const user = "nuria_2";
  const pass = "LBUBtw0JjjnGiIXC";
  const dbName = "random_users";
  const uri=  `mongodb+srv://nuria_2:${pass}@atlascluster.r4mghn8.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("conectado a mongodb"))
    .catch((e) => console.log("error de conexión", e));
};
module.exports = dbConnect;
