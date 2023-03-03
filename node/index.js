const express = require("express");
const app = express();
const port = 4000;
const mg = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mg.connect('mongodb+srv://h2llo:toddlf94@h2llo.muaub68.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});