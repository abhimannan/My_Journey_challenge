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
 // Course Schema
 let CourseSchema = mongoose.Schema({
   name:String,
   rating:Number
 });
 // Student Schema
 let StudentSchema = mongoose.Schema({
   std_name:String,
   roll:Number,
   course:[
    { type: mongoose.Schema.Types.ObjectId, ref: 'CourseModel' }
   ]
 });
// Models
let CourseModel = mongoose.model("CourseModel",CourseSchema);
let StudentModel = mongoose.model("StudentModel",StudentSchema)

// addData
// Course Adding
let courses=async()=>{
   let c2=new CourseModel({
    name:"Python FullStack",
    rating:8
   });
  let res = await c2.save();
  console.log(res);
}
// courses();

// student
let studentAdd = async () => {
  try {
    // Fetch all courses
    let courseAdd = await CourseModel.find({}); // Await to resolve the promise

    if (courseAdd.length === 0) {
      console.log("No courses found. Please add courses first.");
      return;
    }

    // Create a new student
    let s1 = new StudentModel({
      std_name: "Abhi",
      roll: 548,
      course: courseAdd.map(course => course._id) // Add all course IDs to the student
    });

    // Save the student
    let res = await s1.save();
    console.log("Student added:", res);
  } catch (err) {
    console.log("Error in adding student:", err);
  }
};

studentAdd();