const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    detail: {
      a: { type: String, required: false },
      b: { type: String, required: false },
      c: { type: String, required: false },
      d: { type: String, required: false },
    },
    image:{type:String,required:true},
    review:[{body:{type:String,required:false}}]
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
