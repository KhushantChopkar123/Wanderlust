


const mongoose = require('mongoose');


const reviewSchema= new mongoose.Schema({

    
    comment:{
     type:String,
    },

    rating:{
    type:Number,
     min: 1,
     max: 5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,//in this author we store id of who create the review and curreent user who login or sing in!
        ref:'User'

    }

});
module.exports=mongoose.model("Review",reviewSchema)