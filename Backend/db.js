const mongoose = require("mongoose")


let url = "mongodb://localhost:27017/todo"
mongoose.connect(url).then(()=>{
    console.log("mongo Connected")
}).catch((e)=>{
    console.log("getting issue in mongo connection",e)
})

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports={
    todo
}