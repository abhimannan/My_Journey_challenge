/* let express = require("express");
let app = express();
let port=7878;
const ExpressError =require("./ExpressError.js");
// Middlewares
 app.use((req,resp,next)=>{
   // let {q}=req.query;
   // console.log(q);
   // console.log("I'am Middleware!");
   console.log("1st Middleware!");
   next();
});
app.use((req,resp,next)=>{
 console.log("2nd Middleware!");
 next();
});

// Utility middleware
 app.use((req,resp,next)=>{
  req.time=new Date(Date.now()).toString();
  console.log(req.path,req.method,req.hostname,(req.time));
  next();
}); 
app.use("/random",(req,resp,next)=> {
 console.log("I'am for only random");
});
// Authentication middleware
const tokenCheck = (req,resp,next)=>{
let {token} = req.query;
if(token==="Access"){ 
   next();
}
else{
   throw new ExpressError(404,"Access Denaied!");   
}
};

app.get("/api", tokenCheck ,(req,resp)=>{ 
 console.log("data");
});

app.get("/random",(req,resp)=>{
console.log("This is log page!");
});

app.get("/",(req,resp)=>{
resp.send(`I Am Root!`);
});


// 404 error
app.use("/",(req,resp)=>{
resp.send("Page Was Not Found");
});

// Error handling middleware
// app.get("/err",(req,resp)=> {
//    abcd = abcd;
// });

// Default Error & Message
// app.use((err,req,resp,next) => {
//  let {status,message}=err;
//  resp.status(status).send(message);
// });
// tASK
// app.get("/admin",(req,resp)=> {
//  throw new ExpressError(404,"Can't Login");
// });


// app.listen(port,(req,resp)=>{
// console.log(`Server is Running At ${port}`);
// });
/*
