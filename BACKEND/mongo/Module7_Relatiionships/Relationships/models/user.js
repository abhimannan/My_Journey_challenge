// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then((res)=>{
    console.log("DB connected!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relationships');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// users schema
const userSchema = new Schema({
  username : {
    type : String,
  },
  address : [
    {
        location : String, city : String
    }
  ]
});

// user model
let User = mongoose.model("User",userSchema);

let add_Data = async()=>{
    let user1 = new User({
        username : "Abhi",
        address : [
            {
                location:"abr",city:"kuppam"
            }
        ]
    });
    user1.address.push({location:"banglore",city:"gate"});
    await user1.save();

}
add_Data();