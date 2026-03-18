const mongoose = require("mongoose");
let Review = require("./review.js");

let listingschema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  category: {
    type: String,
    required: true,
    enum: [
      "PG",
      "Hostel",
      "Single Room",
      "Shared Room",
      "Apartment",
      "Studio"
    ]
  },

  image: {
    url: String,
    filename: String
  },

  price: {
    type: Number,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  collegeNearby: {
    type: String
  },

  facilities: [
    {
      type: String
    }
  ],

  contactPhone: {
    type: String
  },

  contactEmail: {
    type: String
  },

  status: {
    type: String,
    enum: ["available", "rented"],
    default: "available"
  },

  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});
const Listing = mongoose.model("Listing", listingschema);


listingschema.post("findOneAndDelete", async (listing) => {
  if (listing.review.length) {
    await Review.deleteMany({ _id: { $in: listing.review } });
  }
});

module.exports = Listing;




