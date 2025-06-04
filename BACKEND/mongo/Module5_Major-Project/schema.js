const Joi = require('joi');
const Listing = require('./models/listing');

const Listingschema = Joi.object({
    listing : Joi.object({
         title : Joi.string().required(),
         description : Joi.string().required(),
         image : Joi.string().allow("",null),   
         price : Joi.number().required().min(0),
         location : Joi.string().required(),
         country : Joi.string().required()
    }).required()
});

// review schema validation
let reviewSchema = Joi.object({
    reviews : Joi.object({
        comment : Joi.string().required(),
        rating : Joi.number().required().min(1).max(5)
    }).required()
});




module.exports = Listingschema;
module.exports = reviewSchema;