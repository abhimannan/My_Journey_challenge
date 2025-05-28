let Chat = require("./models/chats.js");

// mongoDB connection
// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("DB connected!");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chat1 = new Chat({
    from : "abhi",
    to : "getha",
    msg : "Gm",
    sent_at : Date.now()
});
chat1.save().then((res)=>{
    console.log("inserted");
}).catch((e)=>{
    console.log(e);
});

let allChats = [
    {from : "Abhi",to : "Vijay",msg : "call me",sent_at : new Date()},
    {from : "Geetha",to : "Abhi",msg : "hi!",sent_at : new Date()},
    {from : "Vijay",to : "Geetha",msg : "How are you?",sent_at : new Date()},
    {from : "Kumar",to : "Abhi",msg : "I'm fine",sent_at : new Date()},
];
Chat.insertMany(allChats);
