const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "user",
  },
  isBlocked:{
    type: Boolean,
    default: false
  },
  cart: {
    type: Array,
    default: [],
  },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

  refreshToken: {
    type: String,
  }
},
{
    timestamps: true,
}
);

// ma hoa password
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// kiem tra password de login
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
