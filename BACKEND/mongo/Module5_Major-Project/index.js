let express = require("express");
let app = express();
let port = 8080;
const mongoose = require('mongoose');
let Listing = require("./models/listing.js");
let path = require("path");
let methodOverride = require('method-override');
let ejsmate = require('ejs-mate')
let ExpressError = require("./utils/ExpressError.js");
let Wrapasync = require("./utils/Wrapasync.js");
let Listingschema = require("./schema.js");


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

// middleware for schema validation
let listingValidation = (req,resp,next)=>{
    let {error} = Listingschema.validate(req.body);
       if(error) {
        let errorMsg = error.details.map((el)=>el.message).join(",");
           throw new ExpressError(400,errorMsg);
       }
       else{
          next();
       }
}

// show route
app.get("/listings",Wrapasync(async (req,resp)=>{
    let data = await Listing.find({});
    resp.render("index.ejs",{data});
}));

// show individual data
app.get("/listings/:id",Wrapasync(async (req,resp)=>{
    let {id} = req.params;
    let listing =await Listing.findById({_id : id});
    resp.render("show.ejs",{listing});
    // resp.redirect("/listings");
}));

// new route
app.get("/newlistings",(req,resp)=>{
    resp.render("new.ejs");
});
// add new data
app.post("/listings",
    listingValidation,
    Wrapasync(async(req,resp,next)=>{
        let Newdata = new Listing(req.body.listing);
        await Newdata.save();
        resp.redirect("/listings");
}));

// eidt form
app.get("/listings/:id/edit", Wrapasync(async (req, resp) => {
     let {id} = req.params;
     let listing =await Listing.findById(id);
     resp.render("edit.ejs",{listing});
}));

// update route
app.put("/listings/:id",
    listingValidation,
    Wrapasync(async (req, resp) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    resp.redirect(`/listings`);
}));

// destroy route
app.delete("/listings/:id",Wrapasync(async (req,resp)=>{
    let {id} = req.params;
    await Listing.deleteOne({_id : id});
    resp.redirect("/listings");
}));


app.get("/home",(req,resp)=>{
    resp.send("Home Route");
});

// if the route is not matched
app.all("*",(req,resp,next)=>{
    next(new ExpressError(404,"Page not found"));
});

// logger
// app.use((req, res, next) => {
//   console.log("REQUEST PATH ", req.path);
//   next();
// });

// error handling middlewares
app.use((err,req,resp,next)=>{
    let {status=500,message="something went wrong"} = err;
    resp.render("error.ejs",{err});
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port ${port}`);
});                    