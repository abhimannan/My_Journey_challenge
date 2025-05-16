// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Yes");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// schema creation
let BookSchema = new mongoose.Schema({
    title : {
        type : String,
        // maxLength : 5,
        required : true
    },
    author : {
        type : String,
        default : "a",
    },
    price : {
        type : Number,
        min : [1,"Invalid price"],
    },
    book_type : {
        type : String,
        enum : ["fiction","non fiction"]
    },
    references : [String]
});

// book model
let Book = new mongoose.model("Book",BookSchema);

let Book1 = new Book({
    title : "New Wordl",
    author : "abhi",
    price : 150,
    book_type : "Not matched",
    references : ["x","y","z"]
});
Book1.save().then((res)=>{
    console.log(res);
}).catch((e)=>{
     // Accessing the errors
    console.log("Error Message : ",e.errors.book_type.properties.message);
});

// Book.find({}).then((res)=>{
//     console.log(res);
// }).catch((e)=>{
//     console.log(e);
// });
