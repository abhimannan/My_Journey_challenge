const Joi = require('joi');

const Schemavalication = Joi.object({
 recipy_name: Joi.string().required(),
 image:Joi.string().allow("",null),
 description:Joi.string().required(),
 quantity:Joi.string().required(),
 price:Joi.number().required()
});

module.exports = Schemavalication;