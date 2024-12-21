// Using "Joi" package validate our schema
/*  steps:
      1. npm i joi
      2. search in the brower that "joi dev"
*/
const Joi = require('joi');

const SchemaValidation = Joi.object({
      title:Joi.string().required(),
      author:Joi.string().required(),
      image_url:Joi.string().allow("",null),
      price:Joi.number().required().min(0),
      book_type:Joi.string().required()
});

module.exports = SchemaValidation;