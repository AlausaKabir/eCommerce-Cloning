const express = require("express");
const bodyParser = require("body-parser");
const { userRegistration, userLogin } = require("../controller/User");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/register", userRegistration);
app.post("/login", userLogin);
module.exports = app;
