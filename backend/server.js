const express=require('express');
const app=express();
app.use(express.json());

app.get("/user",function (req,res) {
    res.json({
        msg:"hi there"
    })
    
})



app.listen(3000);