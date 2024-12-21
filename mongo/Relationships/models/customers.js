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
 // Orders Schema
 const orderSchema = new Schema({
   title:String,
   price:Number
 });
 // Customers Schema
 const customersSchema = new Schema({
    name:String,
    orders:[
     {
       type: Schema.Types.ObjectId,
       ref: 'Order'
     }
    ]
 });


 // Model
 let Order = mongoose.model("Order",orderSchema);
 let customersModel = mongoose.model("customersModel",customersSchema);
 // inserting data into customers collections
 /* let addCustomers =async ()=>{
    let customer1=new customersModel({
      name:"Abhi"
    });

    let order1=await Order.findOne({title:"tea"});
    console.log(order1);
    let order2=await Order.findOne({title:"pizza"});
    console.log(order2);
    customer1.orders.push(order1);
    customer1.orders.push(order2);
    let result=await customer1.save();
    console.log(result);

 }*/
// addCustomers();


// Using populate method
let findCustomer=async ()=>{
  let res=await customersModel.find({}).populate("orders");
  console.log(res[0]);
}
findCustomer();


 // inserting the orders
 // let addOrders =async ()=>{
 //    let result= await Order.insertMany([
 //     {title:"pizza",price:150},
 //     {title:"samosa",price:12},
 //     {title:"tea",price:10}
 //    ]);
 //    console.log(result);
 // }
 // addOrders();