let express=require("express");
let app=express();
let port = 8080;
let Chat=require("./models/chats");
var methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Middlewares
let path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// DB connection
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Data Insertion
let allChats=[
  {from:"Abhi",to:"Aval",message:"No Love",sent_at:new Date()},
  {from:"vijay",to:"geetha",message:"send to pic",sent_at:new Date()},
  {from:"geetha",to:"kumar",message:"hi!",sent_at:new Date()},
]
Chat.insertMany(allChats);

app.get("/home",(req,resp)=>{
  resp.render("home.ejs");
});
// index route
app.get("/index",async (req,resp)=>{
   let chats=await Chat.find();
  //  console.log(chats);
   resp.render("index.ejs",{chats});
});
// Create send the message
app.get("/new",(req,resp)=>{
   resp.render("new.ejs");
});
app.post("/post",(req,resp)=>{
   let {from,message,to}=req.body; 
   let n1=new Chat({
     from:from,
     message:message,
     to:to,
     sent_at:new Date()
   });
   n1.save().then((res)=>{
     console.log(`Message was sent!`);
   }).catch((e)=>{
     console.log(e);
   });
   resp.redirect("/index");
});
// Show Route
app.get("/show/:id",(req,resp)=>{
   let {id}=req.params;
   let get_chat=Chat.findOne({_id:id});
   get_chat.then((data)=>{
     resp.render("single.ejs",{data});
   }).catch((e)=>{
     console.log(e);
   })
});
// Edit Route
app.get("/edit/:id",(req,resp)=>{
   let {id}=req.params;
   let edit_data=Chat.findOne({_id:id});
   edit_data.then((res)=>{
     resp.render("edit.ejs",{res});
   }).catch((e)=>{
     console.log(e);
   });
});
app.patch("/modify/:id",(req,resp)=>{
  let {id}=req.params;
   let {from,message,to}=req.body;
   Chat.updateMany({_id:id},{runValidator:true,new:true},{
     from:from,
     message:message,
     to:to
   }).then((res)=>{
    console.log("Edited!");
  }).catch((e)=>{
    console.log(e);
  });
  resp.redirect("/index");
});
// Delete the chat
app.delete("/delete/:id",async (req,resp)=>{
   let {id}=req.params;
   await Chat.deleteOne({_id:id});
   resp.redirect("/index");
});

app.listen(port,()=>{
  console.log(`The Server is running in port no. ${port}`)
});