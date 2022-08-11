const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// bch yefhemha toul User and import it automatically
const User = mongoose.model("User", userSchema);
module.exports = User;

// module.exports = mongoose.model("User", usersSchema); nabqa kom mara naamel import
