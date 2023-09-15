const express = require("express");
const app = express();

app.get("/user/:id",async(req,res,next)=>{
    try{
        const data=await userId(req.params.id)
        res.send(data)
    }catch(error){
        next(error.message)
    }

app.get("/profile",(req,res)=>{
    res.send("Profile");
});

});

app.listen(4000,()=>{
    console.log("server running on port 4000");
})