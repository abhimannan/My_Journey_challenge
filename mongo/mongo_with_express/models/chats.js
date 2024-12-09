const {mongoose} = require('mongoose');
const { Schema } = mongoose;
// Schema
const chatSchema = new Schema({
  from:{
    type:String,
    require:true
  },
  to:{
   type:String,
   require:true
 },
 message:{
   type:String,
   maxLength:50
},
sent_at:{
  type:Date
}
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports=Chat;