// mongoDb with express

// basic requirements
const express = require("express");
let app = express();
let port = 8080;
let path = require("path");
let Chat = require("./models/chats.js");
let methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
let ExpressError = require("./ExpressError.js");

// mongoDB connection
// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("DB connected!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

// show route
app.get("/index",async (req,resp,next)=>{
    try {
        let data = await Chat.find({});
        // console.log(data);
        resp.render("index.ejs",{data});
    }
    catch(e) {
        next(e);
    }
});

// new from
app.get("/new",(req,resp)=>{
    // throw new ExpressError(404,"page not found");
    resp.render("new.ejs");
});
// add new data
app.post("/newChat",async (req,resp,next)=>{
    try{
        let {from,to,msg} = req.body;
    let user = new Chat({
        from : from,
        to : to,
        msg : msg
    });
    await user.save();
    resp.redirect("/index");
    }
    catch(err) {
        next(err);
    }
});

//  Chat.deleteMany({}).then((res)=>{
//     console.log("deleted");
//  }).catch((e)=>{
//     console.log(e);
//  });

// wrapasync function
function wrapasync(fn) {
    return function(req,resp,next) {
        fn(req,resp,next).catch((e)=>{
            next(e);
        });
    }
}

// show route
app.get("/show/:id",wrapasync(async (req,resp,next)=>{
        let {id} = req.params;
        let data = await Chat.findById(id);
        if(!data) {
        return next(new ExpressError(404,"chat not found"));
    }
    resp.render("show.ejs",{data});
}));
// edit from render
app.get("/edit/:id",async (req,resp,next)=>{
    try {
        let {id} = req.params;
        let edit_data =await Chat.findById(id);
        resp.render("edit.ejs",{edit_data});
    }
    catch(e) {
        next(e);
    }

});
app.patch("/editRoute/:id",async (req,resp,next)=>{
    try {
        let {id} = req.params;
        let {from,to,msg} = req.body;
        await Chat.findOneAndUpdate({_id : id},{
        from : from,
        to : to,
        msg : msg
    },{runValidator : true});
    resp.redirect("http://localhost:8080/index");
    }
    catch(e) {
        console.log(e);
    }
});

// destroy route
app.delete("/destroy/:id",async (req,resp,next)=>{
    try {
        let {id} = req.params;
        await Chat.findByIdAndDelete(id);
        resp.redirect("http://localhost:8080/index");
    }
    catch(e) {
        next(e);
    }
});

app.get("/getData/:id",async (req,resp,next)=>{
    let {id} = req.params;
    let post = await Chat.findById(id);
    if(!post) {
        next(ExpressError(500,"post not found"));
    }
    resp.send(post);
});







app.get("/home",(req,resp)=>{
    resp.render("home.ejs");
});

// mongoose error handling
const handleer = (err,req,resp,next) =>{
    console.log("please follow rules");
    return err;
}

app.use((err,req,resp,next)=>{
    // console.log(err.name);
    if(err.name === "ValidationError") {
        err = handleer(err);
    }
    next(err);
});

// default error handler
app.use((err,req,resp,next)=>{
    let {status=500,message="default error"} = err;
    resp.status(status).send(message);
});     

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port : ${port}`);
});