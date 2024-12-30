// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
let AllData= require("./data.js");


main()
.then(()=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Food_DB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Schema
const FoodSchema = new Schema({
 recipy_name : {
   type:String,
   required:true
 },
 image:{
    type:String
 },
 description: {
   type:String
 },
 quantity:{
   type:String
 },
 price:{
   type:Number,
   min:[0,"Price is not valid!"]
 }
});

// Model
let FoodModel = mongoose.model("FoodModel",FoodSchema);

// inserting the data

let AddData =async ()=>{
  await FoodModel.deleteMany({});
  await FoodModel.insertMany(AllData);
  console.log(`Data is inserted!`);
}
AddData();

module.exports = FoodModel;

