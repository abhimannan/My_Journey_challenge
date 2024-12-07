// getting-started.js
const mongoose = require('mongoose');

main()
.then(()=>{console.log("Connection was established!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const { Schema } = mongoose;

const studentScema = new Schema({
 name : String,
 email : String,
 age: Number
});
// Model
const Student = mongoose.model('Student', studentScema);

// insert an single data in the database
/*let std1=new Student({
   name:"Abhi",
   email:"abhi543it@gmail.com",
   age:20
});
std1.save().then((res)=>{
   console.log("Saved");
}).catch((e)=>{
   console.log(e);
});*/

//InsertMany
/*Student.insertMany([
  {name:"geetha",eamil:"geetha@gmail.com",age:35},
  {name:"kumar",eamil:"kumar@gmail.com",age:45},
  {name:"vijay",eamil:"vijay@gmail.com",age:19}
]).then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});*/

/*Student.insertMany([{
  name:"Aval",
  eamil:"aval@gmail.com",
  age:16
},
{
  name:"Aval",
  eamil:"aval@gmail.com",
  age:16
}]).then((res)=>{
   console.log(res);
}).catch((e)=>{
  console.log(e);
});*/

// Model.findOne()
/*Student.findOne({age:16}).then((res)=>{
   console.log(res);
}).catch((e)=>{
console.log("Success");
});*/
// Model.findMany()
/*Student.find({name:"Abhi"}).then((res)=>{
   console.log(res)
}).catch((e)=>{
   console.log(e);
});*/
// Model.findById("id")
/*Student.findById("67528f1fa56187b490ebe953").then((res)=>{
   console.log(res)
}).catch((e)=>{
   console.log(e);
});*/
//
// Model.Update({filter},{updated valeu})
/*Student.updateOne({name:"Aval"},{name:"Angel"},{new:true})
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});*/
// Model.updateMany()
/*Student.updateMany({name:"Abhi"},{name:"Abhi Mannan"})
.then((res)=>{
   console.log(res)
}).catch((e)=>{
   console.log(e);
});*/
// Model.findOneAndUpdate()
/* Student.findOneAndUpdate({name:"geetha"},{age:30},{new:true})
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
})*/

// Model.findIdAndUpdate()
/*Student.findByIdAndUpdate("67526d94c9c1000be7cabe4c",{name:"AMMA"},{new:true})
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});*/
// Model.delete({})
// Student.deleteOne({name:"Angel"})
// .then((res)=>{
//    console.log(res);
// }).catch((e)=>{
//    console.log(e);
// });
// Student.find({name:"Angel"})
// .then((res)=>{
//    console.log(res);
// }).catch((e)=>{
//    console.log(e);
// });

// Model.deleteMany()
/*Student.deleteMany({name:"Angel"})
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});*/
// model.findOneAndDelete()
/*Student.findOneAndDelete({name:"vijay"})
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});*/
// Model.findByIdAndDelete()
Student.findByIdAndDelete("67526d94c9c1000be7cabe4c")
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e);
});