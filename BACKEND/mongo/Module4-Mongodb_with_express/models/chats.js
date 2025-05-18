let mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema ({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String
    },
    sent_at : {
        type : Date,
        default : Date.now()
    }
});
// model
let Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;
