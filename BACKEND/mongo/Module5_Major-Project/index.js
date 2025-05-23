let express = require("express");
let app = express();
let port = 8080;
const mongoose = require('mongoose');
let Listing = require("./models/listing.js");
let path = require("path");
var methodOverride = require('method-override');
let ejsmate = require('ejs-mate')


main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wonderlust');
}

// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname,"/public")));


/*
app.get("/testListing",async (req,resp)=>{
    let list1 = new Listing({
        title : "Abhi",
        description : "Good!",
        image : "xcfb",
        price : 4500,
        location : "chennai",
        country : "India"
    });
    await list1.save();
    resp.send("data is inseted");
});
*/

// show route
app.get("/listings",async (req,resp)=>{
    let data = await Listing.find({});
    resp.render("index.ejs",{data});
});

// show individual data
app.get("/listings/:id",async (req,resp)=>{
    let {id} = req.params;
    let data =await Listing.findById({_id : id});
    console.log(data);
    resp.render("show.ejs",{data});
    // resp.redirect("/listings");
});

// new route
app.get("/Newlistings",(req,resp)=>{
    resp.render("new.ejs");
});
// add new data
app.post("/listings",async(req,resp)=>{
    let listing = req.body.listing;
    let Newdata = new Listing(req.body.listing);
    await Newdata.save();
    resp.redirect("/listings");
});

// eidt form
app.get("/listings/:id/edit",async (req,resp)=>{
    let {id} = req.params;
    let data = await Listing.findOne({_id : id});
    resp.render("edit.ejs",{data});
});
// update route
app.patch("/listings/:id",async (req,resp)=>{
    let {id} = req.params;
    // console.log(id);
    let data = req.body.listing;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    resp.redirect(`/listings/${id}`);
});
// destroy route
app.delete("/listings/:id",async (req,resp)=>{
    let {id} = req.params;
    await Listing.deleteOne({_id : id});
    resp.redirect("/listings");
});


app.get("/home",(req,resp)=>{
    resp.send("Home Route");
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port ${port}`);
});
                            