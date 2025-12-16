const mongoose = require('mongoose');
const passportLocalMongoose=require("passport-local-mongoose")

const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        
    }
});

userschema.plugin(passportLocalMongoose);// passportLocal-mongoose adds(username, hashpassword,hashing,salting ) field automatically to schema for authetication .some methods are also added like register,authenticate etc
module.exports=mongoose.model("User",userschema)




//we installed passport-local-mongoose to make our work easier for user authentication
//passport,
//passport-local
//passport-local-mongoose


// User Authentication (Signup & Login)

// New users create an account.

// Password is encrypted using bcrypt (hashing + salting).

// Logged-in users get a session cookie, so they stay logged in.

// Only authenticated users can create or modify listings.