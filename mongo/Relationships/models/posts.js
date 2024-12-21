 // getting-started.js
 const mongoose = require('mongoose');
 const { Schema } = mongoose;

 main()
 .then(()=>{
   console.log(`DB Connected!`);
 })
 .catch(err => console.log(err));

 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/Relationships');
 }
 // user Schema
 const userSchema = new Schema({
    name:String,
    email:String
 });

 // posts Schema
 const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
       type:Schema.Types.ObjectId,
       ref:"UserModel"
    }
 });
 // Models
 let UserModel = mongoose.model("UserModel",userSchema);
 let postModel = mongoose.model("postModel",postSchema);

 // let add_data = async ()=>{
 //    let user=await UserModel.findOne({name:"Abhi"});

 //    let post3=new postModel({
 //       content:"Bye Bye :)",
 //       likes:5
 //    })
 //    post3.user=user;

 //    // await user1.save();
 //    await post3.save();
 // }
 // add_data();

 // Using populate("field");
 let getPosts =async ()=>{
   let result = await postModel.findOne({}).populate("user","email");
   console.log(result);
 }
 getPosts();
 // Temporary function for the deleting data
 /* let destroy = async ()=>{
   let res1=await UserModel.deleteMany({});
   let res2=await postModel.deleteMany({});
   console.log(res1);
   console.log(res2);
 }
 destroy();
 */
