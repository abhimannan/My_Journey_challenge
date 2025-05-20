let express = require("express");
let app = express();
let port = 8080;
const mongoose = require('mongoose');
let Listing = require("./models/listing.js");

main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wonderlust');
}

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


app.get("/home",(req,resp)=>{
    resp.send("Home Route");
});

app.listen(port,(req,resp)=>{
    console.log(`Server is running at port ${port}`);
});
                            