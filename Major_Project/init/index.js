// getting-started.js
const mongoose = require('mongoose');
let Listing=require("../models/listing.js");
let initData=require("./data.js")
main()
.then((res)=>{
  console.log("DB Connected!")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hotel');
}

const initDB = async () =>{
 await Listing.deleteMany({});// Clean the DB
 initData.data = initData.data.map((obj)=>({
  ...obj,
  owner:"67b853b9b2792c67c8d621a7"
}));

 await Listing.insertMany(initData.data);// Insert Data into DB
 console.log("Data Was Initialized!");
}
initDB();