let express=require("express");
let app=express();
let port=6364;
let path=require("path");
let Book=require("./models/books.js");
var methodOverride = require('method-override');
let engine = require('ejs-mate');
let MyError = require("./utils/ExpressError.js");
let wrapAsync=require("./utils/wrapAsync.js");
let SchemaValidation = require("./schema.js");

// Middlewares
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// Db Connection
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book');
}
// Schema validation
let schemaValidation=(req,resp,next)=>{
   let {error}=SchemaValidation.validate(req.body);
   if(error){
    const errorMessage = error.details.map((el) => el.message).join(', ');
      throw new MyError(400,errorMessage);
   }
   else{
     next();
   }
} 

// Inserting Data
/*let b1=new Book({
   title:"Atomic habits",
   author:"James",
   image_url:"https://www.bing.com/images/search?view=detailV2&insightsToken=bcid_S6Qv46LIs9oHqxcxoNWLuD9SqbotqVTdPzI&FORM=SBIIRP&iss=SBIUPLOADGET&sbisrc=ImgDropper&idpbck=1&sbifsz=371+x+277+%c2%b7+8.91+kB+%c2%b7+jpeg&sbifnm=download.jpg&thw=371&thh=277&ptime=138&dlen=12160&expw=371&exph=277",
   price:500,
   book_type:"Fiction"
});
b1.save().then((res)=>{
  console.log("Data Inserted!");
}).catch((e)=>{
  console.log(e);
});*/
// index Route
app.get("/index",wrapAsync(async (req,resp)=>{
  let data=await Book.find({});
  resp.render("index.ejs",{data});
}));
app.get("/index/show/:id",wrapAsync(async (req,resp)=>{
 let {id}=req.params;
  let res=await Book.findOne({_id:id});
    resp.render("show.ejs",{res});
}));
// Edit Route
app.get("/index/edit/:id",wrapAsync(async (req,resp)=>{
 let {id}=req.params;
   let edit_data=await Book.findOne({_id:id});
   resp.render("edit.ejs",{edit_data});
}));
// Update Route
app.patch("/edit/handle/:id",schemaValidation,
  wrapAsync(async (req,resp)=>{
    let {id}=req.params;
    let {title,author,image_url,price,book_type}=req.body;
    await Book.findOneAndUpdate({_id:id},{
     title:title,
     author:author,
     image_url:image_url,
     price:price,
     book_type:book_type
    });
    resp.redirect("/index");
}));
// Create Route
app.get("/index/new",(req,resp)=>{
    resp.render("new.ejs");
});
app.post("/new/create",schemaValidation,
  wrapAsync(async (req,resp)=>{
  let {title,author,image_url,price,book_type}=req.body;
  let add_book=new Book({
   title:title,
   author:author,
   image_url:image_url,
   price:price,
   book_type:book_type
  });
  await add_book.save();
  resp.redirect("/index");
}));
// Delete Route
app.delete("/delete/:id",wrapAsync(async (req,resp)=>{
  let {id}=req.params;
  await Book.deleteOne({_id:id})
  resp.redirect("/index");
}));

app.get("/",(req,resp)=>{
  resp.send("<h1>Home Page</h1>");
});
// to handle the page not found error
app.all("*",(req,resp,next)=>{
   next(new MyError(400,"Page Was Not Found!"));
});

// handling the default error
app.use((err,req,resp,next)=>{
   let {status=400,message="Some Error"}=err;
   resp.status(status).render("error.ejs",{message});
});


app.listen(port,(req,resp)=>{
  console.log(`The Server is Running in Port no. ${port}`);
});