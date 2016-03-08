import React from 'react';
import VideoItem from './VideoListItem';


const VideoList = (props)=> {

    const videos = props.videos.map((video) => {
        return <VideoItem onVideoClick={props.onVideoSelect} key={video.etag} video={video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    );
};

export default VideoList;

