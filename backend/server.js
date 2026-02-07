const express=require('express');
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const {createTodo,updateTodo}=require("./validation");
const {todo}=require("./database")



app.post("/todo",async function(req,res) {
    const createPayload=req.body;       //we are storing the data sent via body in a constant(createPayload)
    const parsedPayload=createTodo.safeParse(createPayload);//here we are validating the input using Zod(createTodo)
                                    // safeParse dosen't the app to crash and handles worng inputs 
    if(!parsedPayload.success){         //if the inputs sent are not validated 
        res.status(411).json({          //responding with status and json message
            msg:"you sent wrong inputs"
        })
        return;

    }
    //if the inputs pass then feeding into db
    await todo.create({     
        title:createPayload.title,      //createPayload the sent input stored in the DB
        description:createPayload.description,
        completed: false
    })
    res.json({          //responding with json
        msg:"todo created"
    })
    
})


app.get("/todos", async function (req,res) {    
    const todos= await todo.find({});// returns all the documents without any filter
        res.json({          //we are sending a json response
            todos: todos
        })
    
})

app.put("/completed",async function (req,res) {
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);        //validating via zod updateTodo
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo({
        _id:req.body.id  //this expects the user id via postman
    },{
        completed:true          
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("server listening on port 3000")
});