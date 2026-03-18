const Joi = require("joi");

// LISTING VALIDATION
module.exports.listingSchema = Joi.object({
  listing: Joi.object({

    title: Joi.string().required(),

    description: Joi.string().required(),

    category: Joi.string()
      .valid(
        "PG",
        "Hostel",
        "Single Room",
        "Shared Room",
        "Apartment",
        "Studio"
      )
      .required(),

    location: Joi.string().required(),

    price: Joi.number().min(0).required(),

    collegeNearby: Joi.string().allow("", null),

    facilities: Joi.alternatives().try(
      Joi.array().items(Joi.string()),
      Joi.string()
    ),

    contactPhone: Joi.string().allow("", null),

    contactEmail: Joi.string().email().allow("", null),

    status: Joi.string()
      .valid("available", "rented")
      .optional(),

    image: Joi.string().allow("", null)

  }).required()
});


// REVIEW VALIDATION
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),

    comment: Joi.string().required()
  }).required()
});