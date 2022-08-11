const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
connectDB();
app.use(express.json());

app.use("/api/users", require("./routes/User"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
