 const express= require("express");
 const bodyParser=require("body-parser");
 const app=express();
 app.use(bodyParser.urlencoded({extended:true}));
 app.get("/",function(request,response){
     response.sendFile(__dirname+"/index.html");
 });
 app.post("/",function(request,response){
    var weight=parseFloat(request.body.weight);
    var height=parseFloat(request.body.height);
    var bmi=weight/(height*height);
    console.log(bmi)
    response.send("Your BMI is "+ bmi);
});
 app.listen(3000,function(){
     console.log("server started at port 3000");
 });
 



