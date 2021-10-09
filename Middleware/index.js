const express =require('express');
const app=express();
var middleware=function(req,res,next){
    console.log('Logged');
    next();
}
//If you are using middleware in this way then it will be global for all the routes
//in this app
app.use(middleware);
app.get('/',(req,res)=>{
    res.send("Middle working well");
})
app.listen(3031,()=>{console.log("server strated")});
//If you are using middleware in this way then it will be for specficroutes
//in this app
app.get('/specific',middleware,(req,res)=>{
res.send("Working Well");
})