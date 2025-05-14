// getting-started.js
const mongoose = require('mongoose');
main().then((res)=>{
    console.log("DB Connected Successfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// creating schema
let userSchema = new mongoose.Schema({
    name : String,
    branch : String,
    phone_Number : Number
});

// creating model
let User = new mongoose.model("User",userSchema);

// product Schema
let productSchema = new mongoose.Schema({
    name : String,
    price : Number
});
let Product = new mongoose.model("Product",productSchema);
// console.log(Product);

// insert one data
/*let user1 = new User ({
    name : "abhi",
    branch : "CSE",
    phone_Number : 4512
});
user1.save().then((res)=>{
    console.log("created..");
}).catch((e)=>{
    console.log(e);
});*/

// inserting multiple documents
User.insertMany([
    {
    name : "geetha",
    branch : "ECE",
    phone_Number : 143
},
{
    name : "kumar",
    branch : "CSE",
    phone_Number : 4512
}
]).then((res)=>{
    console.log(res);
});
