const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose");
const dbConnect = require("../config/connection");
dbConnect();


const router = require("./routers");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const Users = require('../src/models/userModel');
app.post('/login/:id', (req, res) => {
  const { id } = req.params;
  const query = Users.findOne({ _id: id })
  .then((doc) => {
    res.json(doc);
  })
  .catch((error) => {
    console.log(error);
  });
});

const NewUser = require('../src/models/customersModel');
app.post('/createCustomer', (req, res) => {
  console.log(req.body);
  NewUser.create(req.body,{
  });
});

const Person = require('../src/models/customersModel');

app.get('/allCustomers', (req, res) => {
  const query = Person.find()
  .then(results=>{
    console.log("exito")
  })
  .catch(error => {
    console.log("no exito")
    console.log(error)
  })
});

// modificar algun cliente de la base de datos.
// app.put('/updateCutomer' , (req, res) => {
//   Person.findOneAndUpdate(

//   )
// })

// borrar algun cliente de la base de datos.
// app.delete('/updateCutomer' , (req, res) => {
//   Person.deleteOne(
//   )
//   Person.deleteMany(
//   )
// })