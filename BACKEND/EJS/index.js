const express = require("express");
let app = express();
let port = 9595;
let path = require("path");


// middlewares for set the ejs files
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));// it will give EJS/views/home.ejs
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/home",(req,resp)=>{
     resp.render("home.ejs");
});

app.get("/random",(req,resp)=>{
     let data = Math.random()*10;
     let num = Math.floor(data);
     resp.render("random.ejs",{num});
});

app.get("/ig/:username",(req,resp)=>{
     let {username} = req.params;
     let instaData = require("./data.json");
     let data = instaData[username];
     console.log(data);
     resp.render("instagram.ejs",{data});
     
}); 

// get register form
app.get("/form",(req,resp)=>{
      resp.render("student.ejs");
});

// get request : sent data through url
app.get("/register",(req,resp)=>{
      let {name,email} = req.query;
      resp.send(name,email);

});
// post request  : sent data through body
app.post("/newData",(req,resp)=>{
      let {name,pass} = req.body;
     resp.send("The new data is created!!");
     console.log(`name is ${name} and password is ${pass}`);
});




app.listen(port,()=>{
     console.log(`The server i running at port ${port}`);
});
