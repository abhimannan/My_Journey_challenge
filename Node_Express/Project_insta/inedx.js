let express=require("express");
let app=express();
let port=2323;
let path=require("path");

const { v4: uuidv4 } = require('uuid');

// the below two lines are used for patch and delete
var methodOverride = require('method-override')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let data=[
 {
  id:uuidv4(),
  img_src:"https://th.bing.com/th/id/OIP.CO2nkj6Est5du2k66CwDnwHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  name:"abhi",
  about:"Coding"
 },
 {
  id:uuidv4(),
  img_src:"https://th.bing.com/th/id/OIP.mk4DihJ5AqVBvOja8MCvugHaE8?w=241&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  name:"Geetha",
  about:"Cooking"
 },
 {
  id:uuidv4(),
  img_src:"https://th.bing.com/th/id/OIP.dHVWF77clmFvh10_606baAHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  name:"Kumar",
  about:"Reading"
 },
 {
  id:uuidv4(),
  img_src:"https://th.bing.com/th/id/OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8?w=267&h=182&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  name:"Vijay",
  about:"Driving"
 }
];

app.get("/home",(req,resp)=>{
  resp.render("home.ejs",{data});
});

app.get("/home/view/:id",(req,resp)=>{
  let {id} = req.params;
  let post=data.find((p)=>{
    return id==p.id;
  });
  resp.render("singlepost.ejs",{post});
});
// Create new post
app.get("/home/new",(req,resp)=>{
  resp.render("new.ejs",{data});
});

app.post("/home",(req,resp)=>{
   let {img_src,name,about}=req.body;
   let id=uuidv4();
   data.push({id,img_src,name,about});
   resp.redirect("/home");
});
// edit
app.get("/home/edit/:id",(req,resp)=>{
    let {id}=req.params;
    let post=data.find((p)=>{
      return id==p.id;
    });
    resp.render("edit.ejs",{post});
});

app.patch("/home/:id",(req,resp)=>{
  let {id}=req.params;
  let post=data.find((p)=>{
    return id==p.id;
  });
  let newname=req.body.name;
  let newimage=req.body.img_src;
  let newabout=req.body.about;
  post.name=newname;
  post.img_src=newimage;
  post.about=newabout;
  resp.redirect("/home");
});
// Delete posts
app.delete("/home/:id",(req,resp)=>{
  let {id}=req.params;
  data=data.filter((p)=> id!=p.id);
  resp.redirect("http://localhost:2323/home");
});

app.listen(port,(req,resp)=>{
    console.log(`The Server is running in Port ${port}`);

});