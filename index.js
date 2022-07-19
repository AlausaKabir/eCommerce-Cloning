const database = require("./config/mongoDB");
const server = require("./routes");

const port = 3000;

database()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err.message));

server.listen(port, () => console.log(`App is running on port: ${port}`));
