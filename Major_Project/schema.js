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

// review validation

const ReviewValidation = Joi.object({
  comment: Joi.string().required(),
  rating:Joi.number().min(1).max(5).required()
});

module.exports = ReviewValidation;

// ChatGpt Code
/* const ReviewValidation = Joi.object({
  comment: Joi.string().min(1).required().messages({
    'string.base': 'Comment must be a string',  // Custom error message for type validation
    'string.empty': 'Comment cannot be empty',
  }),
  rating: Joi.number().required().min(1).max(5).messages({
    'number.base': 'Rating must be a number',
    'number.min': 'Rating must be at least 1',
    'number.max': 'Rating cannot exceed 5',
  })
});

module.exports = ReviewValidation;*/