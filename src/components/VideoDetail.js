import React, { Fragment } from 'react';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <div>loading spinner goes here</div>
    }

    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Fragment>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </div>
            <h2>{selectedVideo.snippet.title}</h2>
            <p>{selectedVideo.snippet.description}</p>
        </Fragment>
        
    )
}

export default VideoDetail;