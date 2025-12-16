const Listing = require('../models/listing.js');
const mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxgeocoding({ accessToken: mapToken });




module.exports.index=async(req,res)=>{
let allListing = await Listing.find({})
  res.render("listings/index.ejs", { allListing,activeCategory: null,showCategory: true })
};





module.exports.renderNewForm=(req, res) => {    
  res.render("listings/new.ejs")
};




module.exports.creatinglisting= async (req, res,next) => {  //validatelisting:-it check data is filled or not then other process is run!
  //map information!
 let response= await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send()

  let url=req.file.path;
  let filename=req.file.filename;
  const listing = new Listing(req.body.listing)
  listing.owner=req.user._id;   // from user model the information is filled that id is directly fixed in listing.owner when we create new listig or post.
  listing.image={url,filename};
  listing.geometry=response.body.features[0].geometry;
  await listing.save()
  
 
  req.flash("success","New Listing is created successfully!");
  res.redirect("/listings")
    
};
module.exports.searchListings= async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.redirect("/listings");
  }

  const allListing = await Listing.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { location: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } }
    ]
  });

  res.render("listings/index.ejs", {
    allListing,
    showCategory: true
  });
}




module.exports.categoryListings= async (req, res) => {
    const { category } = req.params;

    const allListing = await Listing.find({ category });

    res.render("listings/index.ejs", { allListing,category,showCategory: false });
  }


module.exports.showlisting= async(req, res) => {
  let { id } = req.params
  let listing = await Listing.findById(id)
  .populate({
    path:"review",
    populate:{
    path:"author",
  },
})
  .populate("owner");    //populate() is used to fetch related data by replacing referenced IDs with actual documents.
   if (!listing) {
     req.flash("error","Listing you requested for does not exist!");
     return res.redirect("/listings")
  }
  res.render("listings/show.ejs", {listing})
};




module.exports.renderEditform=async (req, res) => {
  let { id } = req.params
  let listing = await Listing.findById(id)
  if (!listing) {
     req.flash("error","Listing you requested for does not exist!");
     return res.redirect("/listings")
  };
  let originalImageUrl=listing.image.url;
 originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");

  res.render("listings/edit.ejs", { listing,originalImageUrl })
};

module.exports.updatelisting=async(req, res)=> {
  
  let { id } = req.params
    let listing=await Listing.findByIdAndUpdate(id, { ...req.body.listing })//first update this then image update!
if (typeof req.file !== "undefined") {//when no change in image then automatically previos photo is stay.
  let url=req.file.path;
  let filename=req.file.filename;
  listing.image={url,filename};
  await listing.save()

};
  
   req.flash("success","Listing is Update successfully!");
  res.redirect(`/listings/${id}`)
};

module.exports.destroylistings=async (req, res) => {
  let { id } = req.params
  await Listing.findByIdAndDelete(id)
   req.flash("success","Listing is Delete successfully!");
  res.redirect("/listings")
};
