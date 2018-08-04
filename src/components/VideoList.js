import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    if (!videos) {
        return <div>loading spinner</div>
    }
    
    return (
        <ul>
            {videos.map(video => (
                <VideoListItem onVideoSelect={onVideoSelect}  video={video} key={video.id.videoId} />
            ))}
        </ul>
    )
}

export default VideoList;