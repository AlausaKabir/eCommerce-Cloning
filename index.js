const express = require("express");
const db = require("./config/mongoDB");
const app = express();
const PORT = 5000;
const userRoute = require("./routes/user");
const authRoute = require("./routes/user");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("api/user", userRoute);
app.use("api/auth", authRoute);

db()
  .then(() => {
    console.log("mongo_db database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
