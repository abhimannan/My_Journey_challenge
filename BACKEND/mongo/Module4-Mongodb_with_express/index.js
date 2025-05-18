// mongoDb with express

// basic requirements
const express = require("express");
let app = express();
let port = 8080;
let path = require("path");
let Chat = require("./models/chats.js");

// mongoDB connection
// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("DB connected!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));



// show route
app.get("/index",async (req,resp)=>{
    let data = await Chat.find({});
    console.log(data);
    resp.render("index.ejs",{data});
});

// new from
app.get("/new",(req,resp)=>{
    resp.render("new.ejs");
});
// add new data
app.post("/newChat",(req,resp)=>{
    let {from,to,msg} = req.body;
    let user = new Chat({
        from : from,
        to : to,
        msg : msg
    });
    user.save().then((res)=>{
        console.log("data created");
    }).catch((e)=>{
        console.log(e);
    });
    resp.redirect("/index");

});


app.get("/home",(req,resp)=>{
    resp.render("home.ejs");
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port : ${port}`);
});

