// Db Connection
const mongoose = require('mongoose');
main()
.then((res)=>{
  console.log("DB Connected!");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Book');
}
// Schema
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type:String
  },
  author: {
    type:String
  },
  image_url: {
    type:String,
    default:"https://th.bing.com/th/id/OIP.P1hfBfyKdnmO2R82Ow3lewHaLH?rs=1&pid=ImgDetMain",
    set:(v)=>v==""?
     "https://th.bing.com/th/id/OIP.P1hfBfyKdnmO2R82Ow3lewHaLH?rs=1&pid=ImgDetMain"
     :v,
  },
  price:{
    type:Number
  },
  book_type:{
     type:String
  }
});
// Model
const Book = mongoose.model('Book', bookSchema);
module.exports=Book;