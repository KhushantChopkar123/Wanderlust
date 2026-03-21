const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

// Create Review
module.exports.creatingreview = async (req, res) => {

  const { id } = req.params;

  const listing = await Listing.findById(id);

  const newReview = new Review(req.body.review);

  // add logged in user as author
  newReview.author = req.user._id;

  // save review first
  await newReview.save();

  // push review id into listing review array
  listing.review.push(newReview);

  await listing.save();

  req.flash("success", "New Review created successfully!");

  res.redirect(`/listings/${id}`);
};


// Delete Review
module.exports.destroyreview = async (req, res) => {

  const { id, reviewId } = req.params;

  // remove review reference from listing
  await Listing.findByIdAndUpdate(id, {
    $pull: { review: reviewId }
  });

  // delete review document
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review deleted successfully!");

  res.redirect(`/listings/${id}`);
};