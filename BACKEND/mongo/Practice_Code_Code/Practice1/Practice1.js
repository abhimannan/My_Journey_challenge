// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("Connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Practice1');
}

// schema 
let productSchema = new mongoose.Schema({
    name : {type : String,
        required : true
    },
    price : {
        type : Number,
        default : 10,
        min : 1
    },
    stock : {
        type : Number,
        default : 1
    }
});
// model
let Product = mongoose.model("Product",productSchema);

// inserting single document
/*
let product1 = new Product ({
    name : "pen",
    price : 12,
    stock : 2
});
product1.save().then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

Product.insertMany([
    {
        name : "Mascutto bat",
        price : 330,
        stock : 10
        },
    {
        name : "Mouse",
        price : 270,
        stock : 5,
        rating : 5
    }
]).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});
*/
// find the documents
/*
Product.find({}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
});
*/
/*
Product.findOne({name : "Mouse"}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});

Product.find({price : {$gt : 100}}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

Product.updateOne({
    name : "Mouse",
},
{
    price : 500
},{
    new : true
}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});

Product.deleteOne({name : "pen"}).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e);
});
*/
Product.insertMany([{
    name : "laptop",
    price : -1,
    stock : 20
}]).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log(e.errors.price.properties.message);
});



