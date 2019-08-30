const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
//Config MDB
require("dotenv/config");
const { DB_USER, DB_PASS } = process.env;
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-wicox.mongodb.net/Publicacao?retryWrites=true&w=majority`,
  {
    useFindAndModify: false,
    useNewUrlParser: true
  }
);
//Register model
require("./src/Models/Publicacao");

//Routes
app.use("/", require("./src/routes"));

app.listen(APP_URL, () => {
  console.log("Server is running!");
});
