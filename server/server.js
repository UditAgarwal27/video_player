const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const videoModel = require('./models/Videos');
dotenv.config();

const cors = require('cors');
app.use(cors());
app.use(express.json());

// const videosData = require('./videos.json');

connectToDatabase = async ()=>{
    try {
        mongoose.connect(
         process.env.MONGO_DB_URL,
         { useNewUrlParser: true, useUnifiedTopology: true },
         () => console.log(" Connected to the database")
       );
   
     } catch (e) {
       console.log("Could not connect to the database");
     }
}

//send a video from local directory
// app.get("/video/:name/:id", async(req, res)=>{
//     const videoname = req.params.name;
//     if(videoname){
//         res.status(200).sendFile(`assets/${videoname}.mp4`, {root: __dirname});
//     }
//     else
//     {
//         res.status(404).json({message: "Video Not Found"});
//     }
// })

app.get("/videos", async(req, res)=>{
    // res.header("Content-Type", 'application/json');
    // res.send(JSON.stringify(videosData));
    const videodata = await videoModel.find();
    res.header("Content-Type", 'application/json');
    res.send(videodata);
})

app.get("/getvideo/:videoid", async(req, res)=>{
    const videoid = req.params.videoid;
    try{
        const data = await videoModel.findOne({videoid: videoid});
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

//fetch posters from local directory
// app.get("/posters/:poster_name", async(req, res)=>{
//     const poster_name = req.params.poster_name;
//     res.header("Content-Type", "image/jpg");
//     res.sendFile(`/assets/posters/${poster_name}`, {root: __dirname});
// })

app.post("/videodata", async(req, res)=>{
    const videodata = 
        {
            "id": req.body.id,
            "name": req.body.name,
            "duration": req.body.duration,
            "posterid": req.body.posterid,
            "videoid": req.body.videoid
        }

    try{
        const video = videoModel(videodata);;
        await video.save();
    }catch(err){
        console.log(err);
    }

})
const port = process.env.PORT;
app.listen(port, ()=>{
    connectToDatabase();
    console.log(`Server running on port ${port}`);
})
