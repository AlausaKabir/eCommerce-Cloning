const mongoose = require("mongoose");
const { TEST_DB, DATABASE_URI } = require("./keys");

const mongoConnection = async () => {
  if (process.env.NODE_ENV === "development") {
    mongoUrl = "mongodb://localhost:27017/NewEcommerce";
  } else {
    mongoUrl = TEST_DB || "mongodb://localhost:27017/NewEcommerce";
  }
  return (
    mongoose.connect(mongoUrl),
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = mongoConnection;
