let express=require("express");
let app=express();
let port = 8080;
let Chat=require("./models/chats");
var methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
const ExpressError = require("./ExpressError.js");

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
app.get("/index",async (req,resp,next)=>{
  try{
    let chats =await Chat.find();
   resp.render("index.ejs",{chats});
  }
  catch(err) {
     next(err);
  }
});
// Create send the message
app.get("/new",(req,resp)=>{
   resp.render("new.ejs");
});

app.post("/post",(req,resp,next)=>{
  try{
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
  }
  catch(err){
     next(err);
  }
   resp.redirect("/index");
});
// asyncwrap function
function asyncwrap(fx){
   return function(req,resp,next){
     fx(req,resp,next).catch((e)=>{
       next(e);
     })
   }
}
/* app.use("/show/:id",(req,resp,next)=>{
   let {name}=req.query;
   if(name==="Abhi"){
     next();
   }
   else{
     throw new ExpressError(500,"Name NotMatched");
   }
}); */
// Show Route
app.get("/show/:id",asyncwrap(async (req,resp,next)=>{
    let {id}=req.params;
    let data=await Chat.findOne({_id:id});
    if(data){
      resp.render("single.ejs",{data});
    }
    else{
       next(new ExpressError("400","Data Not Found"));
    }
})); 
// Edit Route
app.get("/edit/:id",asyncwrap(async (req,resp,next)=>{
    let {id}=req.params;
    let res= await Chat.findOne({_id:id});
    if(res){
      resp.render("edit.ejs",{res});
    }
    else{
      next(new ExpressError(500,"data not get"));
    }
}));
app.patch("/modify/:id",(req,resp,next)=>{
  try{
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
  }
  catch(err){
     next(err);
  }
  resp.redirect("/index");
});
// Delete the chat
app.delete("/delete/:id",async (req,resp,next)=>{
  try{
    let {id}=req.params;
    await Chat.deleteOne({_id:id});
  }
  catch(err){
     next(err);
  }
   resp.redirect("/index");
});
// Mongoose Error Handling
function handleError(err){
   console.log("This is Cast Error");
   return err;
}
app.use((err,req,resp,next)=>{
  //  console.log(err.name);
   if(err.name==="CastError"){
      err=handleError(err);
   }
   next(err);
});

// app.get("/err",(req,resp)=>{
//    abcd=abcd;
// });
// app.use("/err",(err,req,resp,next)=>{
//   console.log("ERROR");
//    resp.send(err);
// });

// default errors :Middleware
app.use((err,req,resp,next)=>{
   let {status=500,message="Page Not found"} = err;
   resp.status(status).send(message);
});

app.listen(port,()=>{
  console.log(`The Server is running in port no. ${port}`)
});