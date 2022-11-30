const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: String, required: true },
    deadline: { type: String, required: true },
    subTasks: [
      {
        id: { type: String },
        text: { type: String },
        status: { type: Boolean },
      },
    ],
    status: { type: String, required: true },
    tags: {
      Official: { type: Boolean },
      Personal: { type: Boolean },
      Others: { type: Boolean },
    },
    user:{type:String,required:true},
  },
  { versionKey: false, timestamps: true }
);

const Todo=mongoose.model("todo",todosSchema);
module.exports=Todo;