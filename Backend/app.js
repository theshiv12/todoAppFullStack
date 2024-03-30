const express = require("express");
const {createTodo,updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require("cors")

let app = express()

app.use(express.json())
app.use(cors())

app.get("/todos",async(req,res)=>{
    const todos = await todo.find()
    return res.json({
        msg:"All todos",
        data:todos
    })
})

app.post("/todo",async(req,res)=>{
    const data = req.body
    const parsedPayload = createTodo.safeParse(data)
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"You sent wrong input"
        })
    }
    await todo.create({
        title: data.title,
        description:data.description,
        completed:false
    })
    return res.json({
        msg:"Todo Added"
    })
})

app.put("/completed",async(req,res)=>{
    const data = req.body
    const parsedPayload = updateTodo.safeParse(data)
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"You sent wrong input"
        })
    }

    const updateddata = await todo.update({
        _id:req.body.id
    },
    {
        completed:true
    })

    return res.json({
        msg:"Todo Completed"
    })
})


let PORT = 4000
app.listen(PORT,()=>{
    console.log("Server is listing to port",PORT)
})

