let express=require("express");
let app=express();
let port=2024;
let path=require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// Middlewares
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Data
let data=[
 {
  id:uuidv4(),
  name:"abhi",
  content:"I Love Coding!"
 },
 {
  id:uuidv4(),
  name:"abhi",
  content:"I Love Coding!"
 },
 {
  id:uuidv4(),
  name:"abhi",
  content:"I Love Coding!"
 },
 {
  id:uuidv4(),
  name:"abhi",
  content:"I Love Coding!"
 }
];

app.get("/posts",(req,resp)=>{
  resp.render("posts.ejs",{data});
});

app.get("/posts/new",(req,resp)=>{
  resp.render("new.ejs");
});

app.post("/posts",(req,resp)=>{
   let {name,content}=req.body;
   let id=uuidv4();
   data.push({id,name,content});
   resp.redirect("/posts");
});

app.get("/posts/:id",(req,resp)=>{
  let {id}=req.params;
  // console.log(id);
  let id_data=data.find((d)=>{
    if(id==d.id){
       return d;
    }
  });
  resp.render("singlepost.ejs",{id_data});
  // console.log(id_data);
  resp.redirect("http://localhost:2024/posts")
});

app.patch("/posts/:id",(req,resp)=>{
  let {id}=req.params;
  let newContent=req.body.content;
  let id_data=data.find((d)=>{
    if(id==d.id){
       return d;
    }
  });
  id_data.content=newContent;
  // console.log(id_data);
  resp.redirect("http://localhost:2024/posts");
});

app.get("/posts/edit/:id",(req,resp)=>{
  let {id}=req.params;
  let post=data.find((d)=>{
   return id==d.id;
  });
  console.log(post);
  resp.render("edit.ejs",{post});
});
app.delete("/posts/:id",(req,resp)=>{
  let {id}=req.params;
 data=data.filter((p)=> id!=p.id)
  resp.redirect("http://localhost:2024/posts");
});

app.listen(port,(req,resp)=>{
  console.log(`The Server is running in Port ${port}`);
});