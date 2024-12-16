let express=require("express");
let app=express();
let port=8080;
let path=require("path");
let Listing=require("./models/listing.js");
var methodOverride = require('method-override');
let ejsMate = require('ejs-mate');

app.get("/",(req,resp)=>{
  resp.send("I Am Root");
});
// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);

// getting-started.js
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');
}

/* app.get("/listing",async (req,resp)=>{
  let list=new Listing({
   title:"My New Home",
   description:"Have a Good Experience",
   price:1500,
   location:"ABR City,Chennai",
   country:"India" 
  });
  await list.save();
  resp.send("Data Inserted");
}); */
// Listing route
app.get("/listings",(req,resp)=>{
 Listing.find({}).then((res)=>{
   resp.render("listings.ejs",{res});
 }).catch((e)=>{
     console.log(e);
 });
});
// Show Route
app.get("/show/:id",async (req,resp)=>{
   let {id}=req.params;
   let res= await Listing.findOne({_id:id});
   resp.render("show.ejs",{res});
});
// New Route
app.get("/new",(req,resp)=>{
   resp.render("new.ejs");
});
// Add The details into database
app.post("/listing/new",(req,resp)=>{
   let {title,description,price,location,country,url}=req.body;
   Listing.insertMany({
    title:title,
    description:description,
    price:price,
    location:location,
    country:country,
    image: {
      filename: "default", // Assign a default filename or handle dynamically
      url: url,
    }
   }).then((res)=>{
     console.log(res);
   }).catch((e)=>{
     console.log(e);
   });
   resp.redirect("/listings")
});
// Edit Route
app.get("/edit/:id",async (req,resp)=>{
   let {id}=req.params;
   let edit_list=await Listing.find({_id:id});
   resp.render("edit.ejs",{edit_list});
});
app.patch("/edit/:id/handle",async (req,resp)=>{
   let {id}=req.params;
   // let listing= req.body.listing
   let {title,desc,url,price,location,country}=req.body;
    await Listing.findOneAndUpdate({_id:id},{
      title:title,  
      description:desc,
      price:price,
      location:location,
      country:country,
      image:{
         url:url
      }
    });
    resp.redirect("http://localhost:8080/listings")
});
// Delete Operation
app.delete("/delete/:id",async (req,resp)=>{
    let {id}=req.params;  
    await Listing.findOneAndDelete({_id:id});
    resp.redirect("/listings");
});
app.listen(port,(req,resp)=>{
  console.log(`The server is Running in ${port}`);
});