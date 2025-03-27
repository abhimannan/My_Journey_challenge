let express = require("express");
let app = express();
let port = 3232;
let path = require("path");
const { v4: uuidv4 } = require('uuid');

// put and delete routes - method override
var methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

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
// data : Sample data like an database data
let data = [
    {
        id:uuidv4(),
        username:"Kuamr",
        content:"I an HOD of the CSE department!",
    },
    {
        id:uuidv4(),
        username:"geetha",
        content:"I am an developer!"
    },
    {
        id:uuidv4(),
        username:"Vijay",
        content:"I Love Gaming!!"
    }
];
app.get("/posts",(req,resp)=>{
     resp.render("posts.ejs",{data});

});

// add new data
app.get("/post/new",(req,resp)=>{
     resp.render("postform.ejs");
});
app.post("/posts",(req,resp)=>{
     let {username,content} = req.body;
     let id = uuidv4();
     data.push({id,username,content});
     resp.redirect("/posts");   

});
// get the individual posts
app.get("/posts/:id",(req,resp)=>{
    let {id} = req.params;
    console.log(id);
    let get_Post = data.find((d)=>{
         if(id==d.id) {
             return d;
         }
    });
    resp.render("singlePost.ejs",{get_Post});
});
// update route
app.get("/post/:id/edit",(req,resp)=>{
     let {id} = req.params;
     let get_Data = data.find((d)=>{
         if(id==d.id) {
             return d;
         }
     });
    //  console.log(get_Data);
     resp.render("update.ejs",{get_Data});
});
app.patch("/posts/:id",(req,resp)=>{
    let {id} = req.params;
     let {username,content} = req.body;
     let newData = req.body.content;
     let get_Data = data.find((d)=>{
        if(id==d.id) {
            return d;
        }
    });
    get_Data.content = newData;
    resp.redirect("/posts");

});

// delete route
app.delete("/destroy/:id",(req,resp)=>{
     let {id} = req.params;
     data=data.filter((p)=> id!==p.id);
     resp.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`The server is running at ${port}`);
});
