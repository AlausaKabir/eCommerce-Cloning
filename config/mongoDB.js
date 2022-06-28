const mongoose = require("mongoose");
const { TEST_DB, DATABASE_URI } = require("./keys");

const mongoConnection = () => {
  if (process.env.NODE_ENV === "development") {
    mongoUrl = DATA_DB;
  } else {
    mongoUrl = TEST_DB || "mongo://localhost/eCommerce";
  }
  return mongoose.connect(mongoUrl);
};

module.exports = mongoConnection;
