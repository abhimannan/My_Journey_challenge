const express = require("express");
let app = express();
let port = 2020;

// path parameters
app.get("/home/:name/:id",(req,res)=>{
    let {name,id} = req.params;
    console.log(name,id);
    res.send(name);
});
// accessing query string
app.get("/search",(req,resp)=>{
    let {name,id} = req.query;
    if(!(name,id)){//if not existed
        resp.send(`nothing searched...`)
    }
    else{
        console.log(name," ",id);
        resp.send(`The name is ${name} & id is ${id}`);
    }
});

// if the route is not matched
app.get("*",(req,res)=>{
     res.send("The Page Was Not Found!!");
});

app.listen(port,(req,res)=>{
     console.log(`The server is running in port ${port}`);
});