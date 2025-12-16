if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
//for access the environmental variable from env we neednpm package of dotenv beacuse without this we cant access the env fiel variabel.
   
const express = require('express');//1
const app = express();
const mongoose = require('mongoose');//2
const path = require('path');
const ejsMate = require('ejs-mate');//layouts boilerplate
app.engine("ejs", ejsMate)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({ extended: true })); //convert get to post
app.use(express.json());
const methodOverride = require('method-override');//getinto patch and delete 
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));
const ExpressError=require("./utils/ExpressError")
const session=require("express-session");   //req.session= is an object where you can store user-specific data that stays saved until the session expires or user logs out.
const MongoStore = require("connect-mongo").default;

const flash=require("connect-flash");//for flash messages
const passport=require("passport");//for authentication    //In passport there is hashing functio is used id pbkdf2 hashing algorithm is used.
const LocalStrategy=require("passport-local");//for local strategy authentication
const User=require("./models/user.js")//importing user model(imp)


const listingRouter=require('./routes/listing.js');//importing listing routes(imp)
const reviewRouter=require('./routes/review.js');//importing review routes(imp)
const userRouter=require('./routes/user.js');//importing user routes(imp)



const dbUrl=process.env.ATLASDB_URL;  

async function main() {
  await mongoose.connect(dbUrl)
}
main().then((res) => {
  console.log("connected to db")
}).catch((error) => {
  console.log(error)
});





const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionoption = {
  store,
  name: "wanderlust.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    
  },
};


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


app.use(session(sessionoption));//flash middlware
app.use(flash())//flash middlware
//create of seeting for authentication using passport and passport-local-mongoose
app.use(passport.initialize());//passport middlware
app.use(passport.session())//passport to use session().A web application needs the ability to identify users as they browse from page to page.// this series of requests and responses each associated with the same user,is called a session.
passport.use(new LocalStrategy(User.authenticate()));//local strategy for authentication using username and password ,User.authenticate() is a method added by passport-local-mongoose to user schema for authentication.
passport.serializeUser(User.serializeUser());//store user in session //serializeUser and deserializeUser are methods added by passport-local-mongoose to user schema for session handling
passport.deserializeUser(User.deserializeUser()); //remove user from session
//end of seeting for authentication using passport and passport-local-mongoose

app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error=req.flash("error");
  res.locals.currUser=req.user;
  next();

});





app.use("/listings",listingRouter)//parent route for listing routes
app.use("/listings/:id/review",reviewRouter)//parent route for review routes
app.use("/",userRouter)//parent route for user routes




app.use((req, res,next) => {
  next(new ExpressError(404,"Page not found!"));//for all other error   //throw also valid   //custom error by custom classs
});

app.use((err, req, res, next) => {
    const { statuscode=500 , message = "Something went wrong!" } = err;
    res.status(statuscode).render("listings/error.ejs", {err});
   
});

app.listen(8080, () => {
  console.log("server started at port 8080");
});



//Step 1: User sends request

//User visits your website → Browser sends request to server.

// Step 2: Server creates a session

// Server creates a new session object:

//Step 3: Server sends a cookie with session ID

// Step 4: Browser stores the cookie

// Step 5: Browser sends cookie on every request

// Next time the user sends a request, the browser automatically sends:
// Step 6: Server reads the cookie

// Server checks the session ID from cookie → finds the session data stored earlier → loads it into req.session.


//Session = stored on server
//  Cookie = stores only session ID in browser
//  Cookie helps the server find the correct session



