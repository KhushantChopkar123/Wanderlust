const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");

const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");


// Create Review Route
// POST  /listings/:id/review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.creatingreview)
);


// Delete Review Route
// DELETE  /listings/:id/review/:reviewId
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.destroyreview)
);

module.exports = router;
