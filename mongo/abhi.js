// getting-started.js
const mongoose = require('mongoose');
main()
.then((res)=>{
    console.log("Success!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongo');
}

// schema
const { Schema } = mongoose;
const carSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  color: {
    type:String,
    uppercase:true
  },
  price: {
    type:Number
  },
  discount:{
     type:String,
     default:"25%"
  },
  features:[String],
  cartype:{
    type:String,
    enum:["low","high"]
  },
  length:{
     type:Number,
     min:[5,"Enter The Valid Length!"]
  }
});
// Model
let CAR = mongoose.model("CAR",carSchema)
// Data Insertion
let car1=new CAR({
   name:"Lambo",
   color:"yellow",
   price:200000,
   features:["speed","velocity","Milage"],
   cartype:"low",
   length:2
});
car1.save().then((res)=>{
   console.log("Data Inserted!");
}).catch((e)=>{
   console.log(e.errors.length.properties.message);
});
