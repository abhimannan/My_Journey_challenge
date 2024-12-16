let allData=require("./data.js");

// Db Connection
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book');
}
// Schema
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type:String
  },
  author: {
    type:String
  },
  image_url: {
    type:String,
    default:"",
  },
  price:{
    type:Number
  },
  book_type:{
     type:String
  }
});
// Model
const Book = mongoose.model('Book', bookSchema);
// data inserting
async function load(){
  await Book.deleteMany({});
  await Book.insertMany(allData);
  console.log("The Data is inserted!");
}
load();
module.exports=Book;