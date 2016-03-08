import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <span>Loading...</span>
    }
    const URL = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-details col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={URL}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
