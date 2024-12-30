 // getting-started.js
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
   await mongoose.connect('mongodb://127.0.0.1:27017/Relationships');
 }
 // Blogs schema
 let BlogSchema = mongoose.Schema({
  title:String,
  content:String,
  author:String
 });
// Comment schema
let CommentSchema = mongoose.Schema({
 user:String,
 comment:String,
 post:[
  {
      _id:false,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogModel'
  }
]
});
// models
let BlogModel = mongoose.model("BlogModel",BlogSchema);
let CommentModel = mongoose.model("CommentModel",CommentSchema);

let AddComment =async ()=>{
  
  let c2=new CommentModel({
   user:"geetha",
   comment:"this is geetha"
  });
  let blog =await BlogModel.findById("676a421600d2c73438c82cc1");
  console.log(blog);
  c2.post = blog._id;

 let res=await c2.save();
 console.log(res);
  
}
// AddComment();

// AddData
 let AddBlog =async ()=>{
  let res=await BlogModel.insertMany([
  {
     title:"Understanding MongoDB Relationships",
     content: "MongoDB offers flexible schema designs...",
     author: "John Doe"
  }
 ])
 console.log(res);
} 

//  AddBlog();