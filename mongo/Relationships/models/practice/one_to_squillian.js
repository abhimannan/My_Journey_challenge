// One To Sqillians Relationships
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
 // Users Schema
 let UserSchema = new Schema({
   username : String,
   followers:Number
 });
 let PostsSchema = new Schema({
     title : String,
     user:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel' 
      }
     ]
 });
 // Model
 let UserModel = mongoose.model("UserModel",UserSchema);
 let PostsModel = mongoose.model("PostsModel",PostsSchema);
 // adding data
 let AddData =async () =>{
     let users=await UserModel.insertMany([
      {
      username:"Abhi",
      followers:12462
     },
     {
      username:"Geetha",
      followers:4522
     }
    ]);
    console.log(users)
 }
 // AddData();

 let AddPost = async ()=>{
   let p1 = new PostsModel({
    title:"Merry Cristmus",
   });
   let p2 = new PostsModel({
    title:"New Year 2025",
   });
   let users = await UserModel.findOne({username:"Abhi"});
    p1.user = users;
    p2.user = users;
   let res1=await p1.save();
   let res2=await p2.save();
   console.log(res1);
   console.log(res2);
 }
// AddPost();
// Getting the users of the particular post using the populate method
let GetPost = async ()=>{
  let post_users = await PostsModel.find({}).populate("user");
  console.log(`post_users : ${post_users}`);
}
GetPost();