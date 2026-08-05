const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.mongodblink);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});
const organizationSchema = mongoose.Schema({
  title: String,
  description: String,
  admin: mongoose.Types.ObjectId,
  members: [mongoose.Types.ObjectId],
});
const organizationModel = mongoose.model("organization", organizationSchema);
const userModel = mongoose.model("user", userSchema);

module.exports = {
  organizationModel,
  userModel,
};
