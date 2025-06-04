let express = require("express");
let app = express();
let port = 4040;
let Blog = require("./model/post.js");
let ExpressError = require("./ExpressError.js");
let path = require("path");

// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BlogDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));


// add new data
// let post1 = new Blog({
//     title : "first data",
//     author : "Abhi",
//     about : "currently i am practicing backend"
// });
// post1.save().then((res)=>{
//     console.log("data is added");
// }).catch((e)=>{
//     console.log(e);
// });

// wrappeasync function
let wrapasync = (fn)=>{
    return (req,resp,next)=>{
        fn(req,resp,next).catch((e)=>{
            next(e);
        })
    }
}

app.get("/show/:id",wrapasync(async (req,resp)=>{
    let {id} = req.params;
    let data = await Blog.findById(id);
    if(!data) {
        throw new ExpressError(500,"data is not found");
    }
    resp.render("show.ejs",{data});
}));


app.get("/home",(req,resp)=>{
    resp.render("home.ejs");
});

let handlecasterr = (err)=>{
    console.log("it is an casterror,so follow the rules");
    console.log(err.name);
}

app.use((err,req,resp,next)=>{
    if(err.name=="CastError") {
        handlecasterr(err);
    }
});


// default error handling middleware
app.use((err,req,resp,next)=>{
    let {status=500,message="default message"} = err;
    resp.status(status).send(message);
});

app.listen(port,(req,resp)=>{
    console.log("server is running");
});