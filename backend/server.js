const express=require('express');
const app=express();
app.use(express.json());
const {createTodo,updateTodo}=require("./validation");
const {todo}=require("./database")



app.post("/todo",async function(req,res) {
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return;

    }
    //feeding into db
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false
    })
    res.json({
        msg:"todo created"
    })
    
})


app.get("/todos", async function (req,res) {
    // const todos= await todo.find({});
        res.json({
            todos:[]
        })
    
})

app.put("/completed",async function (req,res) {
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000);