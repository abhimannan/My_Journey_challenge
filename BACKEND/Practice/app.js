const express = require("express");
let app = express();
let port = 6565;
let path = require("path");
// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


app.get("/home",(req,resp)=>{
     resp.send("home page");
});

app.get("/students",(req,resp)=>{
     let data = require("./data.json");
     resp.render("students.ejs",{data});
     for(let i of data){
         console.log(i.name) 
     }
});

app.listen(port,(req,resp)=>{
     console.log(`Server is running in ${port}`);
});