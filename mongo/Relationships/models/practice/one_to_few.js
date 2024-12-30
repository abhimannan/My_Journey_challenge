// One To Few Relationships
 // One to fex relations
 const mongoose = require('mongoose');
 const { Schema } = mongoose;
 const { ObjectId } = mongoose.Types;

 main()
 .then(()=>{
   console.log(`DB Connected!`);
 })
 .catch(err => console.log(err));

 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/Relationships_Practice');
 }
// UserSchema
let UserSchema = new Schema({
  username:String,
  address:[
    {
      _id:false,
      location:String,
      city:String
    }
  ]
});
// model
let UserModel=mongoose.model("UserModel",UserSchema);

// AddData
let AddData =async ()=>{
  let u1 = new UserModel({
     username:"Abhi",
     address:{location:"143 001 SC Street",city:"King City"}
  });
  u1.address.push({location:"123 Dr. street",city:"Kuppam"});
  let res = await u1.save();
  console.log(res);
}
AddData();
