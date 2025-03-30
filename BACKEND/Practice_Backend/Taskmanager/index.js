let express = require("express");
let app = express();
let port = 5252;
let path = require("path");

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// database data
let data = [
    {id:1,task:"DSA Class",Reward:"can watch youtube"},
    {id:2,task:"MERN Stack Project",Reward:"Go Out"},
    {id:3,task:"Communication Practice",Reward:"Use insta for 30min"}
];


app.get("/",(req,resp)=>{
     resp.send("basic route");
});


app.get("/home",(req,resp)=>{
     resp.render("home.ejs",{data});
     console.log(data);
     
});


app.listen(port,(req,resp)=>{
     console.log(`The server is running at port ${port}`);
});
