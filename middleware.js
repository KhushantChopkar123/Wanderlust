const Listing = require('./models/listing.js');
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError");

 // fixed path & spelling
const { listingSchema, reviewSchema } = require("./schema.js"); // match exact exported names from schema

// Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    req.session.redirectUrl = req.originalUrl;

    if (!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};

// Save redirect URL to locals (after login)
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Check if current user is the owner of the listing
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Check if current user is the author of a review
module.exports.isAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Validate listing using Joi schema
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body); // must match exact export
   if (error) {
     let errmsg=error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errmsg);
}else{

    next();
}

};

// Validate review using Joi schema
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errmsg = error.details.map(el => el.message).join(",");
          throw new ExpressError(400,errmsg);
    }
    else{
        next();
    }
    
};
