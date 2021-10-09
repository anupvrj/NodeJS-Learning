const express =require("express");
const app =express();
//Lets create middle ware for username validation
var mylogger=function(req,res,next){
    if(req.params.username=="anup")
    console.log("Logged in Successfully")
    else
    console.log("Invalid Login")
next();
}

//Lets create route for the browser access of user login
app.get("/users",(req,res)=>{
    res.send("All Users Accessed");
})

app.get("/users/:username",mylogger,(req,res)=>{
    res.send("You are logged in as "+req.params.username);
})
app.get("/users/:username/?:book",(req,res)=>{
    if(req.params.book==null)
    res.redirect('http://google.com')
    else
    res.send("Book is issued to  "+req.params.username);

});
app.listen(3034);