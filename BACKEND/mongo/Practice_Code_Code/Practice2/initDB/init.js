let Listing = require("../models/listing.js");

// getting-started.js
const mongoose = require('mongoose');
main().then(()=>{
    console.log("DB is connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/PracticeDB');
}

let data = [
    {name:"Abhi",place:"abr",price:20},
    {name:"vijay",place:"banglore",price:45}
];

let initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(data);
    console.log("data is inserted!");
}
initDB();

