let express=require("express");
let app=express();
let port = 2020;
let ExpressError = require("./ExpressError.js")
app.use("/home",(req,resp,next)=>{
  let {q}=req.query;
  if(q==="Abhi"){
    next();
  }
  else{
    throw new ExpressError(500,"Acces Dedied!");
  }
});
app.get("/home",(req,resp)=>{
  resp.send("Home Page Access");
});
app.get("/err",(req,resp)=>{
  ab=ab;// error route
});

// Admin error
app.get("/admin",(err,req,resp)=>{
 throw new ExpressError(403,"Admin Error");
});

// Default Error Handling
app.use((err,req,resp,next)=>{
  let {status=500,message="Error"}=err;
  resp.status(status).send(message);
});






app.listen(port,(req,resp)=>{
  console.log(`Server running in ${port}`);
});