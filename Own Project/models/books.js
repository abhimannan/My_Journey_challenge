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
    default:"https://www.bing.com/images/search?view=detailV2&insightsToken=bcid_S6Qv46LIs9oHqxcxoNWLuD9SqbotqVTdPzI&FORM=SBIIRP&iss=SBIUPLOADGET&sbisrc=ImgDropper&idpbck=1&sbifsz=371+x+277+%c2%b7+8.91+kB+%c2%b7+jpeg&sbifnm=download.jpg&thw=371&thh=277&ptime=138&dlen=12160&expw=371&exph=277",
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