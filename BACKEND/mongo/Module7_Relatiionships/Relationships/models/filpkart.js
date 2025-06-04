// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose;


main().then((res)=>{
    console.log("DB connected!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relationships');
}

// schemas

const userSchema = new Schema({
   username : String,
   age : Number,
   gmail : String
});

const orderSchema = new Schema({
    productname : String,
    price : Number,
    orderBy : [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ]
});


// models
let User = mongoose.model("User",userSchema);
let Order = mongoose.model("Order",orderSchema);

let addOrders = async()=>{
    let user = await User.findOne({username : "abhi"});
    let order  = new Order({
        productname : "Pull ups bar",
        price : 680
    });
    await order.orderBy.push(user);
    let res =await  order.save();
    console.log(res);

}
// addOrders();

let findUser = async()=>{
    let user = await Order.find({}).populate("orderBy");
    console.log(user);
}
findUser();

// let addUsers = async()=>{
//     let user1 = new User({
//         username:"abhi",
//         age : 12,
//         gmail : "abhi543it@gmail.com"
//     });
//     await user1.save();

// }
// addUsers();
