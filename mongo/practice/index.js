// getting-started.js
const mongoose = require('mongoose');

main()
.then((res)=>{
  console.log("Connection Was Established!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice_database');
}

const { Schema } = mongoose;

const familySchema = new Schema({
   family_name:{
     type:String,
     required:true,
   },
   family_names:[String],
   location:{
     type:String,
   },
   total_count:{
     type:Number,
     min:[5,"Enter the count value > 5"]
   }
});
// Model
let FamilyModel = mongoose.model("FamilyModel",familySchema);
// insert the data into database
/* let f1=new FamilyModel({
   family_name:"Geetha Ellam",
   family_names:["geetha","kumar","vijay","abhi"],
   location : "ABR city",
   total_count:4
});
f1.save().then((res)=>{
  console.log(res)
}).catch((e)=>{
  console.log(e);
}); */
/*  FamilyModel.insertMany(
   {family_name:"Bhuvanesh Ellam",
    family_names:["Bhuvanesh","his wife","rajesh","gowry"],
    location : "Chennai",
    total_count:4},
  {family_name:"Arun Ellam",
    family_names:["Arun","sathyaswari","son1","son2"],
    location : "Avulnatham",
    total_count:3},
   {family_name:"Aval Ellam",
    family_names:["Abhi","Aval","Son","Daughter"],
    location : "Aval City",
    total_count:4},
    {family_name:"Aval Ellam",
     family_names:["Abhi","Aval","Son","Daughter"],
     location : "Aval City",
     total_count:4},
     {family_name:"Arun Ellam",
      family_names:["Arun","sathyaswari","son1","son2"],
      location : "Avulnatham",
      total_count:3},
).then((res)=>{
  console.log(`The datas has been inserted!`)
}).catch((e)=>{
  console.log(e);
}); */
// Model.find({})
 /* FamilyModel.findOne({
  family_name : "Vijay Ellam"
}).then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */
/* FamilyModel.find({family_name:"Bhuvanesh Ellam"}).then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */
/*FamilyModel.findById("6753e21c400192a10fc7e571").then((res)=>{
   console.log(res);
}).catch((e)=>{
  console.log(e);
});*/

/*let f2=new FamilyModel({
 family_name:"Giri Ellam",
 family_names:["Giri","Wife","son1","son2"],
 location : "Vinayakapuram",
 total_count:4
});
f2.save().then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
});
let f3=new FamilyModel({
 family_name:"Giri Ellam",
 family_names:["Giri","Wife",],
 location : "xyz",
 total_count:2
});
f3.save().then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
});*/

// Model.Update()
/* FamilyModel.updateMany({family_name:"Giri Ellam"},
 {location:"America"}
).then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.loog(e);
}); */
// Model.findOneAndUpdate()
/* FamilyModel.findOneAndUpdate({total_count:{$lte:3}},{
 total_count:10
}).then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */
/* FamilyModel.findByIdAndUpdate("6753e417288083b028d74bc8",{family_name: 'Thambi Ellam'})
.then((res)=>{
  console.log(res);
})
.catch((e)=>{
  console.log(e);
}); */
// Model.delete
/* FamilyModel.deleteOne({family_name:"Giri Ellam"})
.then((res)=>{
  console.log(res);
})
.catch((e)=>{
  console.log(e);
}); */
/* FamilyModel.deleteMany({family_name:"Giri Ellam"})
.then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */
/* FamilyModel.findOneAndDelete({family_name: 'Thambi Ellam'})
.then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */

/* FamilyModel.findByIdAndDelete("6753e81adb1f9563dcfa1c69")
.then((res)=>{
  console.log(res);
}).catch((e)=>{
  console.log(e);
}); */
// Accessing The Errors
 let f1=new FamilyModel({
   family_name:"Geetha Ellam",
   family_names:["geetha","kumar","vijay","abhi"],
   location : "ABR city",
   total_count:3  // in the schema we have defined that min:5
});
f1.save().then((res)=>{
  console.log(res)
}).catch((e)=>{
  console.log(e.errors.total_count.properties.message);
});
