let express = require("express");
let app = express();
let port = 2525;
// getting-started.js
const mongoose = require('mongoose');
let path=require("path");
let FoodModel = require("./init/model.js");
var methodOverride = require('method-override');
let ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);
let ExpressError = require("./utils/ExpressError.js");
let HandleError = require("./utils/WrapAsync.js");
let Schemavalication = require("./schema.js");
 
// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

// DB Connection
main()
.then(()=>{
  console.log(`DB Connected!`);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Food_DB');
}

app.get("/home",(req,resp)=>{
  resp.send("Home Page");;
});

// midedleware for handling the validation
let validation = (req,resp,next)=>{
  let {error} = Schemavalication.validate(req.body);
  if(error){
    const errorMessage = error.details.map((el) => el.message).join(',');
     throw new ExpressError(400,errorMessage);
  }
  else{
     next();
  }
}


// index route
app.get("/index",
  HandleError(async (req,resp)=>{
 let data =await FoodModel.find({});
  resp.render("index.ejs",{data});
}));
// Show Route
app.get("/index/show/:id",HandleError(async (req,resp)=>{
  let {id} = req.params;
  let single_data = await FoodModel.findOne({_id:id});
  resp.render("show.ejs",{single_data})
}));
// Edit Route
app.get("/index/edit/:id",HandleError(async (req,resp)=>{
  let {id} = req.params;
  let data = await FoodModel.findOne({_id:id});
  resp.render("edit.ejs",{data});
}));
// Update Route
app.patch("/handle/:id",validation,
  HandleError(async (req,resp)=>{
 let {id} = req.params;
 let {recipy_name,image,description,quantity,price}=req.body;
 await FoodModel.findOneAndUpdate({_id:id},{
  recipy_name:recipy_name,
  image:image,
  description:description,
  quantity:quantity,
  price:price
 });
 resp.redirect("/index");
}));
// create Route
app.get("/index/new",(req,resp)=>{
  resp.render("new.ejs");
});
// Adding New Data
app.post("/add/new",validation,
  HandleError(async (req,resp)=>{
  let {recipy_name,image,description,quantity,price}=req.body;
  let data=new FoodModel({
   recipy_name:recipy_name,
   image:image,
   description:description,
   quantity:quantity,
   price:price
  });
  await data.save();
  resp.redirect("/index");
}));

// delete Route
app.delete("/delete/:id",HandleError(async (req,resp)=>{
 let {id} = req.params;
 await FoodModel.findOneAndDelete({_id:id});
 resp.redirect("/index");
}));
 

// page not found
app.all("*",(req,resp,next)=>{
    next(new ExpressError(400,"Page Was Not Found"));
});

// Default error handling middleware
app.use((err,req,resp,next)=>{
   let {status=400,message="Something Went Wrong"}=err;
   resp.status(status).render("error.ejs",{message});
});

app.listen(port,()=>{
  console.log(`The Server is running at Port ${port}`);
});
