let express = require("express");
let app=express();
let port=5050;
let ExpressError = require("./ExpressError.js");
let path = require("path");

// built-in middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// Middlewares
let home = (err,req,resp,next)=>{
   let {name} = req.query;
   console.log(name);
   if(name==="Abhi"){
    next();
   }
    else{
        throw new ExpressError(500,"Access Denied1");
    }
};
app.get("/home",home,(req,resp) =>{
    console.log("Data");
 });
/*
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
    req.time=new Date(Date.now()).toString();
    console.log(req.time);
    console.log(req.method,req.path,req.hostname,req.time);
    next();
}); */
// specific middlewares
// app.use("/home",(req,resp,next)=>{
//    console.log("I'am For home route");
//    next();
// });
let randomMidleware=(req,resp,next)=>{
    console.log(`I'am for random route`);
    next();
};


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
     throw new ExpressError(500,"Access Denied!")
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
/* app.use((req,resp,next)=>{
    console.log("Loger Details");
    req.time=new Date(Date.now()).toString()
    console.log(req.method,req.path,req.hostname,req.time);
    next();
}); */
// tasks
/*
Log Every Request
Create a middleware that logs the method, URL, and timestamp of each incoming request.
Example: GET /home at 2024-12-16 10:00:00.
*/
/* app.use((req,resp,next)=>{
     console.log(req.method);
     console.log(req.path);
     console.log(req.hostname);
     req.time=new Date(Date.now()).toString();
     console.log(req.time);
     next();
}); */
// Middleware to restrict for the apecific route access 9am to 5pm
app.use("/login",(req,resp,next)=>{
    let date=new Date();
    let time = date.getHours();
    if(time>9 && time<17){
        next();
    }
    else{
        throw new ExpressError(500,"Access only within 9am to 5pm,Access Denaid!");
    }
});
app.get("/login",(req,resp)=>{
    resp.render("login.ejs");  
});
// Middleware for handle the error paths
// app.use((req,resp,next)=>{
//    resp.status(404).send("Page Was Not Found");
// });
// default error message
app.use((err,req,resp,next)=>{
    let {status=500,message="Page Not Found"}=err;
    resp.status(status).send(message);
});

app.listen(port,(req,resp)=>{
    console.log(`Server running in ${port}`);
});
