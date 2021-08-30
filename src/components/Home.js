import React from 'react'
import "./Home.css"
import { useEffect, useState } from 'react';
// import axios from 'axios';
import Thumbnail from './Thumbnail';

export default function Home() {
    const [videosData, setVideosData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                await fetch("http://localhost:8000/videos")
                .then(res=>res.json())
                .then(result=>{
                    setVideosData(result)
                })
            }
            catch(err){
            console.log(err.message);
            }
        }
        fetchData();
    },[])

    return (
        <div className="home">
            <div className="row">
            {videosData.map(video=>(
                <Thumbnail key={true} id={video.id} posterid={video.posterid} name={video.name} duration={video.duration} videoid={video.videoid}/>                  
            ))}
            </div>
        </div>
    )
}
