import React from 'react'
import './Thumbnail.css';
import {Link} from 'react-router-dom';
export default function Thumbnail({id, posterid, name, duration, videoid}) {
    return (
        <div className="thumbnail">
            {/* <Link to={`/video/${name}`}>
                <img src={`http://localhost:8000/posters/${postername}`} alt={name} />  
            </Link>
            <p>{name}</p>
            <p>{duration}</p> */}
            <p>{name}</p>
            <p>{videoid}</p>
            <Link to={`/video/${videoid}`}>
                <img src={`https://drive.google.com/thumbnail?id=${posterid}`} alt={name} />  
            </Link>
            <p>{duration}</p>
        </div>
    )
}
