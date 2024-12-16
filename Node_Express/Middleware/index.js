let express = require("express");
let app=express();
let port=5050;

// Middlewares
/* app.use((req,resp,next)=>{
   console.log("I Am Middleware 1");
   let {query} = req.query;
   console.log(query);
    resp.send("Bye"); 
    next();// next is used to execute the next middleware
});
app.use((req,resp,next)=>{
    console.log("2nd Middleware");
    next();
});

app.use("/",(req,resp,next)=>{
    console.log("I'am Root Middleware");
    next();
});
*/
// Loger File - morgan package
/* app.use((req,resp,next)=>{
    console.log("Loger Details");
    req.time=new Date(Date.now()).toString()
    console.log(req.time);
    console.log(req.method,req.path,req.hostname,req.time);
    next();
}); */
// specific middlewares
app.use("/home",(req,resp,next)=>{
   console.log("I'am For home route");
   next();
});
let randomMidleware=(req,resp,next)=>{
    console.log(`I'am for random route`);
    next();
};
app.get("/home",(req,resp) =>{
   resp.send("Home Route");
});

app.get("/random",randomMidleware,(req,resp)=>{
    resp.send("I'am random route");
});
// middleware :- Authentication
let userTest = (req,resp,next)=>{
   let {name} = req.query;
   if(name==="Abhi"){
     next();
   }
   else{
     resp.send("Enter the valid details");
   }
};
app.get("/user",userTest,(req,resp)=>{
    resp.send("data");
});
// Error Handling
app.use("/wrong",(err,req,resp,next)=>{
    console.log("ERROR1");
    console.log(err);
    next(err);
});

app.get("/wrong",(req,resp)=>{
    abc=abc;
});



// Loger File - morgan package
app.use((req,resp,next)=>{
    console.log("Loger Details");
    req.time=new Date(Date.now()).toString()
    console.log(req.method,req.path,req.hostname,req.time);
    next();
});

// Middleware for handle the error paths
app.use((req,resp,next)=>{
   resp.status(404).send("Page Was Not Found");
});

app.listen(port,(req,resp)=>{
    console.log(`Server running in ${port}`);
});
