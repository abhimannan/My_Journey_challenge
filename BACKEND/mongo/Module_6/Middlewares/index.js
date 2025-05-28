let express = require("express");
let app = express();
let ExpressError = require("./ExpressError.js");
/*
app.use((req,resp,next)=>{
    console.log("This is my 1st middleware");
    next();
});
app.use((req,resp,next)=>{
    console.log("This is my 2nd middleware");
    next();
});
*/
 // logger - Morgan
/*
app.use((req,resp,next)=>{
    console.log(req.hostname,req.method,req.url);
    next();
});
*/

app.use("/home",(req,resp,next)=>{
    console.log("home middleware");
    next();
});

let accessCheck = (req,resp,next)=>{
    let {token} = req.query;
    if(token=="access") {
        console.log("data was accessed");
        next();
    }
    else{
        console.log("data can't access");
        throw new ExpressError(404,"page not found");
    }
};

// api
app.get("/api" , accessCheck , (req,resp)=>{
    resp.send("Data");
});



app.get("/err",(req,resp)=>{
    abcd = abcd;
});

app.use("/err",(err,req,resp,next)=>{
    console.log("------------err1-------------");
    next(err);
});

app.get("/admin",(req,resp)=>{
    throw new ExpressError(403,"admin don't have the access");
});

// to dandle the default error handlings
app.use((err,req,resp,next)=>{
    let {status=500,message="default error"} = err;
    resp.status(status).send(message);
});



app.get("/",(req,resp)=>{
    resp.send("Root route");
});

app.get("/home",(req,resp)=>{
    resp.send("Home route");
});

app.listen(5252,()=>{
    console.log("practicing middleware");
});
