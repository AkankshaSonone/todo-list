const mongoose= require("mongoose")

const toDoSchema= new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        required:true
    }
})

module.exports= mongoose.model("todos",toDoSchema);