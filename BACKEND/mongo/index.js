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
/*
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

User.findById("68242f4a767299cc285dc13a").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
*/
// User.deleteMany({}).then((result)=>{
//     console.log("Deleted!");
// });
/*
User.find({}).then((data)=>{
    console.log(data);
});
User.updateOne({name : "kumar"},{name : "Vijay"},{new : true}).then((res)=>{
    console.log("data updated!");
});
*/

// User.findByIdAndUpdate("6826818c6c3ea5ee5193f8d0",{name : "Abhi"},{new : true}).
// then((res)=>{
//     console.log("updated!");
// });
/*
let user1 = new User ({
    name : "rajesh",
    class : "CSE",
    marks : 46
});
user1.save().then((data)=>{
    console.log("user added");
}).catch((e)=>{
    console.log(e);
});
*/
// User.findByIdAndUpdate("682685dad3ed803f8624cff0",{name: "abhi"},{new : true}).
// then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// });

// User.deleteMany({}).then((res)=>{
//     console.log(res);
// }).catch(e=>console.log(e));
