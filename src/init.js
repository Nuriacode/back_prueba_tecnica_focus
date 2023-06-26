const express = require("express");
const dbConnect = require("../config/connection");
dbConnect();
const app = express();
const router = require("./routers");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
