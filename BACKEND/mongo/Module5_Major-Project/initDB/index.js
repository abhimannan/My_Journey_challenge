// getting-started.js
const mongoose = require('mongoose');
let Listing = require("../models/listing.js");
let getdata = require("./data.js");


main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Wonderlust');
}

const initDB =async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(getdata.data);
}
initDB();
