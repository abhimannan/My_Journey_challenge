 // getting-started.js
 const mongoose = require('mongoose');
 const { Schema } = mongoose;

 main()
 .then(()=>{
   console.log(`DB Connected!`);
 })
 .catch(err => console.log(err));

 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/Relationships_Practice');
 }

  // Comments Schema
  let CommentSchema = new Schema({
   comment:String,
   author:String
});

 // PostSchema
 let PostSchema = new Schema({
  Acc_name : String,
  title:String,
  description:String,
  Comments:[
    {
       type: Schema.Types.ObjectId, ref: 'Comment'
    }
  ]
 });
 // models
 let Post = mongoose.model("Post",PostSchema);
 let Comment = mongoose.model("Comment",CommentSchema)
 
  // Middleware for handling the deletions operation
  PostSchema.post("findOneAndDelete", async function(post) {
    if (post && post.Comments.length) { 
      let delete_All_Comments = await Comment.deleteMany({ _id: { $in: post.Comments } });
      console.log(delete_All_Comments);
    }
  });


 // Adding Comment
 let AddComment = async ()=>{
 let comments = await Comment.insertMany([
   {
    comment:"Keep Moving Forward in life",
    author:"Vijay"
   },
   {
    comment:"Nice Celebrations",
    author:"geetha"
   }
 ]);
 console.log(comments);
 }
 // AddComment();

// Adding the Post
let AddPost =async ()=>{
  let post1 = new Post({
   Acc_name:"Abhi",
   title:"Happy New Year",
   description:"Here you can see the new year celebration 2025"
  });
  let getComments = await Comment.find({});
  post1.Comments = getComments;
  
  let res=await post1.save();
  console.log(res);
}
// AddPost();

let postDelete = async ()=>{
  let res = await Post.findByIdAndDelete("676f646636dfa7522dd00fa0");
  console.log(res);
}
postDelete();


// let Del = async ()=>{
//   let res= await Post.findByIdAndDelete("676ea5202bf3ed533cbd5284");
//   console.log(res);
// }
// Del();