let mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
       type: String,
       required: true
  },
  author:{
    type: String,
    required: true
  },
  about : {
    type: String,
    required: true
  }
});
     
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;