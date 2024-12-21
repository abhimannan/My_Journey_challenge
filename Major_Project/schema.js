// My Own Code
 /*const Joi = require('joi');
const SchemaValidation = Joi.object({
 title:Joi.string().required(),
 description:Joi.string().required(),
 price:Joi.number().required().min(0),
 location:Joi.string().required(),
 country:Joi.string().required(),
 image:Joi.object({
  filename:Joi.string(),
  url:Joi.string().allow("",null)
 })
});

module.exports = SchemaValidation;
*/
// Chatgpt Code
const Joi = require('joi');

const SchemaValidation = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Title is required.',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Description is required.',
  }),
  price: Joi.number().required().min(0).messages({
    'number.base': 'Price must be a number.',
    'number.min': 'Price cannot be negative.',
  }),
  location: Joi.string().required().messages({
    'string.empty': 'Location is required.',
  }),
  country: Joi.string().required().messages({
    'string.empty': 'Country is required.',
  }),
  url: Joi.string().uri().allow('', null).optional().messages({
    'string.uri': 'URL must be a valid URI.',
  }), // Allow `url` directly in the request body
});

module.exports = SchemaValidation;

