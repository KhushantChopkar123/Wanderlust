const joi =require('joi')//server side or backend schema  for validation
const Joi = require("joi");



module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),

    price: Joi.number().min(0).required(),

    image: Joi.string().allow("", null),
    
   category: Joi.string()
  .required()
  .valid(
    "Trending",
    "Apartment",
    "Villa",
    "Bungalow",
    "Hostel",
    "Cottage",
    "Guest-house",
    "Studio"
  )



    
  }).required()
});



 



module.exports.reviewSchema=joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required()

    }).required()
})
