// getting-started.js
const mongoose = require('mongoose');

main()
.then(()=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Practice_Relations_DB');
 }

// Contact Schema
   let ContactSchema = mongoose.Schema({
     name:String,
     phone_no:Number
   });

 // User Schema
 let UserSchema = mongoose.Schema({
    name:String,
    email:String,
    contacts:[
       {
          _id : false,
          type: mongoose.Schema.Types.ObjectId,
          ref: 'ContactsModel'
       }
    ]
 })

// Models
let ContactsModel = mongoose.model("ContactsModel",ContactSchema);
let UsersModel = mongoose.model("UsersModel",UserSchema);

// UsersModel Inserting Data
let addUsers =async ()=>{
  let u1=new UsersModel({
    name:"Aruna",
    email:"aruna@gmail.com"
  })
  let get_contact = await ContactsModel.find({});
  u1.contacts=get_contact;
  let result=await u1.save();
  console.log(result);
}
// addUsers();
// Using Populate get the data
let findUsers = async ()=>{
 let result = await UsersModel.find({name:"Aruna"});
 console.log(result);
}
findUsers();


// inserting the contacts into the collections
/* let addContacts =async ()=>{
    let contacts=await ContactsModel.insertMany([
     {name:"Abhi",phone_no:8956231475},
     {name:"Geetha",phone_no:9965874125},
     {name:"Vijay",phone_no:2356897415},
     {name:"Kumar",phone_no:1258643798}
    ]);
    console.log(contacts);
} */
// function calling
// addContacts();