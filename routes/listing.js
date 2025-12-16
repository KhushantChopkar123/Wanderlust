const express=require("express");
const router=express.Router({mergeParams:true});//mergeParams:true:-to access params of parent router
let wrapAsync=require("../utils/wrapAsync.js")
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController=require("../controllers/listings.js")
const multer  = require('multer')//its is used for parse    . used npm   multer , cloudaniary, used multer-cloudanary
const { storage } = require("../cloudconfig");//cloud id used for store.
const upload = multer({ storage })//store it

router.route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,  // <-- corrected
    wrapAsync(listingController.creatinglisting)
  );



// New&create route  
router.get("/new",isLoggedIn,listingController.renderNewForm)//render new form




router.get("/search",listingController.searchListings);





// GET /listings/category/Villa:-examples
router.get( "/category/:category",
  wrapAsync(listingController.categoryListings)
);




router.route("/:id")
.get(wrapAsync(listingController.showlisting))//show route
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updatelisting))//update route
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroylistings))//delete route




//edit&update route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditform))//render edit form



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