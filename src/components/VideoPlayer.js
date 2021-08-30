import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './VideoPlayer.css';
export default function VideoPlayer() {
    const {videoid} = useParams();
    const [videoname, setVideoname] = useState();

    useEffect(() => {
        async function fetchData(){
            try{
                await fetch(`http://localhost:8000/getvideo/${videoid}`)
                .then(res => res.json())
                .then(result=>{
                    setVideoname(result.name);
                })
    
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return (
        // <div className="videoplayer">
        //     <h2>this is the videoplayer screen</h2>
        //     <h2>Now playing {videoname}</h2>
        //     <video controls muted>
        //         <source src={`http://localhost:8000/video/${videoname}`} type="video/mp4"></source>
        //   </video>
        // </div>
        <div className="videoplayer">
            <h2>this is the videoplayer screen</h2>
            <h2>Now playing {videoname}</h2>
            <div className="player">
                <iframe src={`https://player.vimeo.com/video/${videoid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=d2bede10c4`} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Countdown2.mp4">
                </iframe>
            </div>
        </div>
    )
}
