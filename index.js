const express = require("express");
const db = require("./config/mongoDB");

const app = express();
const PORT = 5000;

db()
  .then(() => {
    console.log("mongo_db database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
