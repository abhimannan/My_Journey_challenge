const express = require("express");
let app = express();
let port = 9595;
let path = require("path");

// middlewares for set the ejs files
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));// it will give EJS/views/home.ejs
app.use(express.static(path.join(__dirname,"public")));



app.get("/home",(req,resp)=>{
     resp.render("home.ejs");
});

app.get("/random",(req,resp)=>{
     let data = Math.random()*10;
     let num = Math.floor(data);
     resp.render("random.ejs",{num});
});

app.listen(port,()=>{
     console.log(`The server i running at port ${port}`);
});
