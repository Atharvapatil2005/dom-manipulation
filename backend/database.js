// //todo{
//             title:string;
//             description:string;
//             completed:boolean
//         }


const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://atharvaspatil:QpIMPGNs4H4avEj2@cluster0.c401dfw.mongodb.net/dom-manipulation")

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo=mongoose.model('todos', todoSchema);
module.exports={
    todo:todo
}