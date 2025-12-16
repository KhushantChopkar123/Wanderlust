const mongoose = require('mongoose');
let Review=require("./review.js");



// const {Schema}=mongoose;


//schema of listing 
let listingschema = new mongoose.Schema({
    title: {

        type: String,
        required:true

    },
    description: {

        type: String

    },
    category: {
  type: String,
  required: true,
  enum: [
    "Trending",
    "Apartment",
    "Villa",
    "Bungalow",
    "Hostel",
    "Cottage",
    "Guest-house",
    "Studio"
  ]
},

     
    image: {
       url:String,
       filename:String,
    },
    
    price: {

        type: Number

    },
    location:{
        type:String

    },
    country: {
        type: String
    },
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    owner:{
       type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
   geometry: {
  type: {
    type: [String],
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
}


});

const Listing = mongoose.model("Listing", listingschema);


//it is created for deleting all reviews associated with a listing when that listing is deleted
listingschema.post("findOneAndDelete",async(listing)=>{
  if(listing.review.length){
    const res= await Review.deleteMany({_id:{$in:listing.review}})//_id of reviews want to match with is in listing.review array _id then delete those reviews from mongoos
    console.log(res)
  }
})

module.exports = Listing;




