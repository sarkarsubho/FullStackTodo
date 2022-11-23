const mongoose=require("mongoose");


const userSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:false}
})

// have to encript password
userSchema.pre("save",function(next){

});

// userSchema.method.


const User =mongoose.model("user",userSchema);
module.exports=User;