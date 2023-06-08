const express = require("express");
const app = express();
const router = require("./routers");

app.use(express.json());
app.use(router);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(3001);
