let Review=require("../models/review.js");//mongoose schma with model of review
const Listing = require('../models/listing.js');

module.exports.creatingreview=async(req,res)=>{
  let{id}=req.params
  let listing=await Listing.findById(id)
  let newreview=new Review(req.body.review)//we collect all information from form by post request ,then we push that all information into the review section of listing schema, for that we call listingschema data by id
  newreview.author=req.user._id
  console.log(newreview)
  console.log(listing)
  listing.review.push(newreview)
  await listing.save()
  await newreview.save()
   req.flash("success","New Review is created successfully!");
  res.redirect(`/listings/${id}`)

};

module.exports.destroyreview=async(req,res)=>{
   let{id,reviewId}=req.params
   await Listing.findByIdAndUpdate(id,{$pull:{review:reviewId}}) //pull is used to remove the reference of review from listing schema that is id or review,then we click delebtn then req come to hereserver then we find listing by id and update it by pulling that review id from review array of listing schema
   await Review.findByIdAndDelete(reviewId)
    req.flash("success","Review is Delete successfully!");
  res.redirect(`/listings/${id}`)
};