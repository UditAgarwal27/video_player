const mongoose = require('mongoose');

const videos = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    posterid:{
        type:String,
        required:true
    },
    videoid:{
        type:String,
        required:true
    }
    
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("videos", videos);
