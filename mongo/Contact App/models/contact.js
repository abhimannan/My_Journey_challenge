let mongoose =require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  phone_no:{
    type:Number
  },
  email:{
    type:String
  }
});

let ContactModel=mongoose.model("ContactModel",contactSchema);

module.exports=ContactModel;