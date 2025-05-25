let express = require("express");
let app = express();

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
app.use((req,resp,next)=>{
    console.log(req.hostname,req.method,req.url);
    next();
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
