// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
.then(()=>{
  console.log(`DB Connected!`);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relationships');
}
// Schema
const usersSchema = new Schema({
  name: String,
  address: [
   {
     _id:false,
     location:String,
     city:String
   }
  ]
});
// Model
const userModel = mongoose.model("userModel",usersSchema);
// inserting data
let add_data =async ()=>{
 let u1 = new userModel({
   name:"Abhi",
   address:[
    {location:"ABR City",city:"Banglore"}
   ],
 });
 u1.address.push({location:"x",city:"xa"});
 let result = await u1.save();
 console.log(result);
}
// Function calling
add_data();