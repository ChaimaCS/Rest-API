const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const mongoose = require("mongoose");
const db = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("connected");
  } catch (err) {
    console.error("cannot connect to mongodb", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
