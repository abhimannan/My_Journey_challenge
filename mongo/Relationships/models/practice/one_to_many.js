// One To Many Relationships
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
   await mongoose.connect('mongodb://127.0.0.1:27017/Relationships_Practice');
 }



// Customers and Oredrs Example

// Customers Schema
let CustomerSchema = new Schema({
  customer_Name:String,
  orders:[
    {
       type: Schema.Types.ObjectId, ref: 'OrderModel'
    }
  ]
})
// Orders Schema
let OrderSchema = new Schema({
  product_name:String,
  price:Number
});

// Middleware for handle the deletion
/* CustomerSchema.pre("findOneAndDelete",async ()=>{
  console.log("pre middleware!");
}) */

CustomerSchema.post("findOneAndDelete",async (data)=>{
 if(data.orders.length){
   let del_orders = await OrderModel.deleteMany({_id:{$in:data.orders}});
   console.log(del_orders);
 }
});
/* CustomerSchema.post("findOneAndDelete",async (customerData)=>{
   let deleteOrders = await OrderModel.deleteMany({_id:{$in:customerData.orders}});
   console.log(deleteOrders);
}) */
// models
let CustomersModel = mongoose.model("CustomersModel",CustomerSchema);
let OrderModel = mongoose.model("OrderModel",OrderSchema);
// Add Data
let AddOredrs =async ()=>{
  let orders =await OrderModel.insertMany([
    {
   product_name:"pencial",
   price:50
  },
 {
  product_name:"pencil",
  price:15
 },
 {
  product_name:"orange",
  price:50
 }]
 );
 console.log(orders);
}
// AddOredrs();
// Add Customers
let AddCustomer =async ()=>{
   let c2=new CustomersModel({
    customer_Name:"Geetha"
   })
   let order = await OrderModel.findById("676d7fcecb14a26d39f023d3");
   c2.orders = order;
   let res = await c2.save();
   console.log(res);

    // let result = await CustomersModel.find({}).populate("orders");
    // console.log(result[0]);
}
// AddCustomer();

// Add Another Customer,Order Data
let Add = async ()=>{
    let customer = new CustomersModel({
        customer_Name:"Geetha"
    });
    await order.save();
    
    await customer.save();

    let getOrder=await OrderModel.findById("676d7f62c38cacbeca4c7e75");
    customer.orders = getOrder;

}
// Add();


let Del = async ()=>{
   let deleteData = await CustomersModel.findByIdAndDelete("676e01a30cb17c333f376226");
   console.log(`Deleted Data : `,deleteData);
}
Del();


// let abhi = async ()=>{
//    let res=await CustomersModel.deleteMany({customer_Name:"Geetha"});
//    console.log(res);
// }
// abhi();