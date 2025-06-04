let Blog = require("../model/post.js");

// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("DB Connected");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/BlogDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let data = [
  {title : "atomic habits",author : "thala",about : "nothing"},
  {title : "The power of your mind",author : "vijay",about : "he is my brother"},
  {title : "how to live happy",author : "abhi",about : "written by an writter"}
]

let initDB = async ()=>{
  await Blog.deleteMany({});
  await Blog.insertMany(data);
  console.log("data is inserted");
}
initDB();
