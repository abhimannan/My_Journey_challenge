let express=require("express");
let app=express()
let port=1414
let path=require("path");
let ContactModel=require("./models/contact.js");
var methodOverride = require('method-override')
// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))

// DB Connection
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Contact_App');
}
// Inserting Data into DB
let allContacts=[
{name:"Abhi",phone_no:7989065214,email:"abhi543it@gmail.com"},
{name:"Geetha",phone_no:7989056234,email:"geetha143it@gmail.com"}
];
ContactModel.insertMany(allContacts).then((res)=>{
  console.log("Data is inserted!");
}).catch((e)=>{
  console.log(e);
});

app.get("/Home",(req,resp)=>{
  resp.render("home.ejs");
});
// index Route
app.get("/index",(req,resp)=>{
 ContactModel.find().then((res)=>{
   resp.render("index.ejs",{res});
   console.log(res);
 }).catch((e)=>{
   console.log(e);
 });
});
// Show Route
app.get("/show/:id",(req,resp)=>{
  let {id}=req.params;
  ContactModel.findOne({_id:id}).then((res)=>{
    resp.render("show.ejs",{res});
  }).catch((e)=>{
     console.log(e);
  })
});
// Edit Route
app.get("/edit/:id",(req,resp)=>{
   let {id}=req.params;
   ContactModel.findOne({_id:id}).then((res)=>{
     resp.render("edit.ejs",{res})
   }).catch((e)=>{
     console.log(e);
   })
})
app.patch("/edit/data/:id",(req,resp)=>{
  let {id}=req.params;
  let {name,phone_no,email}=req.body;
  ContactModel.updateOne({_id:id},{
     name:name,
     phone_no:phone_no,
     email:email
  }).then((res)=>{
     console.log("Edited!")
  }).catch((e)=>{
     console.log(e);
  })
  resp.redirect("/index");
})
// Delete The Data in DB
app.delete("/delele/:id",async (req,resp)=>{
   let {id}=req.params;
    await ContactModel.deleteOne({_id:id});
    resp.redirect("/index");
  });
// Create New Contact
app.get("/new",(req,resp)=>{
   resp.render("new.ejs");
});
app.post("/new/contact",(req,resp)=>{
   let {name,number,email}=req.body;
   let contact=new ContactModel({
     name:name,
     phone_no:number,
     email:email
   });
   contact.save().then((res)=>{
     console.log("Inserted!")
   }).catch((e)=>{
     console.log(e);
   });
   resp.redirect("/index");
});


app.listen(port,()=>{
  console.log(`Server is Running in Port No. ${port}`);
})