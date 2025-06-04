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



// orders schema
const ordersSchema = new Schema({
  foodname: String,
  price : Number
});
// customers schema
const customersSchema = new Schema({
    name : String,
    orders : [
        {
            type: Schema.Types.ObjectId, ref: 'Order'
        }
    ]
});

// pre & post middleware
// customersSchema.pre("findOneAndDelete", async()=>{
//     console.log("this is pre middleware");
// });

customersSchema.post("findOneAndDelete", async(data)=>{
    if(data.orders.length) {
        let res = await Order.deleteMany({_id : {$in : data.orders}});
        console.log(res);
    }
});


// models
let Order = mongoose.model("Order",ordersSchema);
let Customer = mongoose.model("Customer",customersSchema);

// add customers
let addCustomers = async() =>{
    let customer1 = new Customer({
        name : "Ramesh"
    });

    let order1 = await Order.findOne({foodname : "samosa"});
    let order2 = await Order.findOne({foodname : "pizza"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);
    
    let res = await customer1.save();
    console.log(res);
}
// addCustomers();


// orders inserting into database
let addOrders = async() =>{
    let res = await Order.insertMany([
        {
            foodname : "pizza",
            price : 250
        },
        {
            foodname : "samosa",
            price : 12
        },
        {
            foodname : "chips",
            price : 350
        }
    ]);
    console.log(res);
}
// addOrders();

const addo = async()=>{
    let customer = new Customer({
        name : "testing customer"
    });

    let order = await Order.findOne({foodname : "test"});
    customer.orders.push(order);
    let s =await customer.save();
    console.log(s);

}
// addo();
const del = async()=>{
    let customer = await Customer.findByIdAndDelete("683e53b4dfaa26500aa10575");
    // console.log(customer);
}
del();