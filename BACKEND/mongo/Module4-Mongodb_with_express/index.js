// mongoDb with express

// basic requirements
const express = require("express");
let app = express();
let port = 8080;
let path = require("path");
let Chat = require("./models/chats.js");
let methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

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

//  Chat.deleteMany({}).then((res)=>{
//     console.log("deleted");
//  }).catch((e)=>{
//     console.log(e);
//  });

// show route
app.get("/show/:id",async (req,resp)=>{
    let {id} = req.params;
    let data = await Chat.findById(id);
    resp.render("show.ejs",{data});

});
// edit from render
app.get("/edit/:id",async (req,resp)=>{
    let {id} = req.params;
    let edit_data =await Chat.findById(id);
    resp.render("edit.ejs",{edit_data});

});
app.patch("/editRoute/:id",async (req,resp)=>{
    let {id} = req.params;
    let {from,to,msg} = req.body;
      await Chat.findOneAndUpdate({_id : id},{
        from : from,
        to : to,
        msg : msg
    },{runValidator : true});
    resp.redirect("http://localhost:8080/index");
});

// destroy route
app.delete("/destroy/:id",async (req,resp)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    resp.redirect("http://localhost:8080/index");
});

app.get("/home",(req,resp)=>{
    resp.render("home.ejs");
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port : ${port}`);
});

