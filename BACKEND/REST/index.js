let express = require("express");
let app = express();
let port = 5050;
let path = require("path");

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,resp)=>{
     resp.render("home.ejs");
});

app.listen(port,()=>{
    console.log(`The server is running at ${port}`);
});
