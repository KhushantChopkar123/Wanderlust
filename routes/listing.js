const express=require("express");
const router=express.Router({mergeParams:true});
let wrapAsync=require("../utils/wrapAsync.js")
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController=require("../controllers/listings.js")
const multer  = require('multer')
const { storage } = require("../cloudconfig");
const upload = multer({ storage })

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.creatinglisting)
  );

router.get("/new",isLoggedIn,listingController.renderNewForm)

router.get("/search",listingController.searchListings);

router.get("/category/:category",
  wrapAsync(listingController.categoryListings)
);

router.route("/:id")
.get(wrapAsync(listingController.showlisting))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroylistings))

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditform))

module.exports=router;



//flow of mvc pattern

// 1. User sends a request

// Example: User clicks "Show Listings".

// 2. Controller receives it

// Decides what to do.

// 3. Controller asks Model

// Example: “Give me all listings”.

// 4. Model goes to Database

// Finds the data and sends it back.

// 5. Controller sends data to View

// Example: res.render("listings", { allListings })

// 6. View shows the page to User

// User sees the final HTML page.