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


const NewUser = require('../src/models/customersModel');
app.post('/createCustomer', (req, res) => {
  console.log(req.body);
  NewUser.create(req.body,{
  });
});


