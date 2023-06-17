const mongoose= require('mongoose');


const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"please enter the firstname"],
      
    },
    lastName:{
        type:String,
        required:[true,"please enter the lastname"],
      
    },

    enrollmentNo:{
        type:Number,
        required:[true,"please enter the entollment number"],
        
      
    },

    password:{
        type:String,
        required:[true,"enter password"]
    },
    isAdmin:{
        type:Boolean
    }
});


module.exports= mongoose.model('User',userSchema);
