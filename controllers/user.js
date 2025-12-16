const User=require("../models/user.js")


module.exports.rendersignupform=(req,res)=>{
     res.render("user/signup.ejs")
};
module.exports.signupform=async(req,res)=>{
    try {
        let{username,email,password}=req.body;
   const newUser=new User({username,email});
   const registeredUser=await User.register(newUser,password);//In Passport + Passport-Local-Mongoose, the method User.register() is used to create a new user and automatically hash + salt the password before saving it to the database.and unique username also
  req.login(registeredUser,(err)=>{    // by req.login we directly login after singup 
     if (err) {
        return next(err)
    }else{
         req.flash("success","Welcome to Wanderlust!");
   res.redirect("/listings");
    }
  });
  
    } catch (error) {
        req.flash("error",error.message);
        res.redirect("/signup");
    }
   
};
//“Sign up is used to create a new account. Login is used to access and protect that account by verifying your identit again.


module.exports.renderloginform=(req,res)=>{
    res.render("user/login.ejs")
};

module.exports.loginform=async(req,res)=>{
  req.flash("success","Welcome back to Wanderlust!");
   let redirectUrl=res.locals.redirectUrl || "/listings"
   res.redirect(redirectUrl);
};

module.exports.logoutform=(req,res,next)=>{
  req.logOut((err)=>{     //it is a method of passport that give to acceess to delete any user session with the useing method like serializer and deserializer.
    if (err) {
        return next(err)
    }else{
        req.flash("success","you are logged out!")
        res.redirect("/listings");
    };

  });
};