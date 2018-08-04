import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    return (
        <li onClick={() => onVideoSelect(video)}>
            
            <img src={video.snippet.thumbnails.default.url} /><span>{video.snippet.title}</span>
            <p>{video.snippet.description}</p>
        </li>
    )
}

export default VideoListItem;