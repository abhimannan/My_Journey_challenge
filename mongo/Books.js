// getting-started.js
const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log("Success!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/vijay');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Schema
const { Schema } = mongoose;
const Department = new Schema({
  name:{
     type:String,
     required:true
  },  
  location:{
     type:String
  },
  rating:{
     type:Number
  },
  autonamus:{
     type:String,
     default:"Yes"
  }
});
// Model
const dept = mongoose.model('dept', Department);

// insert the data into the database : Single Data insertion
let dept1= new dept({
   name:"VIP",
   location:"ABR",
   rating:2.5
});
dept1.save().then((res)=>{
   console.log("Data Inserted!");
}).catch((e)=>{
   console.log(e);
});
// insertmany : Multiple data insertion
/*dept.insertMany([
{name:"ECE",location:"kuppam",rating:4},
{name:"CSE",location:"EEE",rating:5},
{name:"ECE",location:"Chittot",rating:3},
{name:"MECH",location:"Banglore",rating:2}
]).then((res)=>{
   console.log(res)
}).catch((e)=>{
   console.log(e);
});*/


