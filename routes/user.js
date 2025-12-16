const express=require("express")
const router=express.Router({mergeParams:true});//mergeParams:true:-to access params of parent router
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/signup")
.get(userController.rendersignupform)//render form
.post(wrapAsync(userController.signupform)) //get data  from form

router.route("/login")
.get(userController.renderloginform)
.post(saveRedirectUrl,
passport.authenticate("local",{//this middleware authenticates user using local strategy(username,password) .it checks username and password with db and if authenticated then creates session cookie and verify only.
failureRedirect:"/login",//if authentication fails redirect to /login   
failureFlash:true,//if authentication fails flash error message automatically custom message by passport-local-mongoos
}),
userController.loginform);

//passport.authenticate() :-is used to verify the user’s credentials (username + password) and log the user into the application.



 //logout
router.get("/logout",userController.logoutform)

module.exports=router;