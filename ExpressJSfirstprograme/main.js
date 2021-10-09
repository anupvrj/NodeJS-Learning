const express =require('express');
const app=express();
/*Now call route directory*/
app.get("/",(req,res)=>{
    res.send("<h2>Hello World</h2><br><h3>Program is Running Well</h3>");
});
app.listen(3030,()=>console.log("Server Started"));
