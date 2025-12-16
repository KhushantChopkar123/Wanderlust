const express=require("express");
const router = express.Router({mergeParams:true});//mergeParams:true:-to access params of parent router
let wrapAsync=require("../utils/wrapAsync.js")

const { validateReview,isLoggedIn,isAuthor} = require("../middleware.js");
const reviewController=require("../controllers/review.js")





//Review route
// Reviews Post route   listinf/:id/review
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.creatingreview))

//Review delete Route
router.delete("/:reviewId",isAuthor,wrapAsync(reviewController.destroyreview))

module.exports=router;
