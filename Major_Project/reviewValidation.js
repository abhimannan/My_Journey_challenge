
// review validation

const Joi = require('joi');

const ReviewValidation = Joi.object({
    comment: Joi.string(),
    rating:Joi.number().min(1).max(5)
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