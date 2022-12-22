const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId:{type:String, required: true},
    title: { type: String, required: true },
    price: { type: Number, required: true },
    detail: {
      a: { type: String, required: false },
      b: { type: String, required: false },
      c: { type: String, required: false },
      d: { type: String, required: false },
    },
    image:{type:String,required:true},
    review:[{body:{type:String,required:false}}],
    qnt:{type:Number,required:true}
  },
  { versionKey: false, timestamps: true }
);

const Cart=mongoose.model("cart",cartSchema);
module.exports=Cart;