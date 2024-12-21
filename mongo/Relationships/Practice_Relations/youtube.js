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

// Youtube Schema
   let youtubeChannelSchema = mongoose.Schema({
     name:String,
     subscribers:Number
   });

// Videous Schema
let videoSchema = mongoose.Schema({
   title:String,
   likes:Number,
   views:Number,
   youtubeName:[
      { type: mongoose.Schema.Types.ObjectId, ref: 'youtubeModel' }
   ]
})
// youtubeSchema
let youtubeSchema = mongoose.Schema({
  name:String,
  subscribers:Number
});

// Models
let videoModel = mongoose.model("videoModel",videoSchema);
let youtubeModel = mongoose.model("youtubeModel",youtubeSchema);

// inserting video details
/* let addData =async ()=>{
  let y1=await youtubeModel.findOne({name:"Abhi"});

  let v2=new videoModel({
   title:"know about money!",
   likes:1505,
   views:2548
  });
  v2.youtubeName=y1;
  let r1=await v2.save();
  // let r2=await y1.save();
  console.log(r1);
  // console.log(r2);
}
addData(); */
let findChannel = async ()=>{
  let res=await videoModel.find({}).populate("youtubeName");
  console.log(res[0]);
}
findChannel();
