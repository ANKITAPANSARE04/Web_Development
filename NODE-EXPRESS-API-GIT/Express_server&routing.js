const express= require("express");
const app=express();
app.get('/',function(req,res){
  res.send("Hello");
});

app.get("/Contact",function(req,res){
  res.send("This page Include my contact details");
});

app.get("/About",function(req,res){
  res.send("This page Include my About details");
});
app.listen(3000,function(){
  console.log("Server started at 3000");
})