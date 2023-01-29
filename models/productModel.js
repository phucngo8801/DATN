const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    require:true,
  },
  quantity:{
    type: Number,
    require: true,
  },
  sold: {
    type: Number,
    default: 0,
    
  },
  images: {
    type: Array,
  },
  brand: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  ratings: [
    {
      star: Number,
      postedby: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    },
  ],
},{timestamps:true});

//Export the model
module.exports = mongoose.model("Product", productSchema);
