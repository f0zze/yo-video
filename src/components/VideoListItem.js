import React from 'react';

export default class VideoListItem extends React.Component {
    constructor({video,onVideoClick}) {
        //the same as const video =  props.video;
        super();
        this.video = video;
        this.imageUrl = video.snippet.thumbnails.default.url;
        this.title = video.snippet.title;
        this.onVideoClick = onVideoClick;
    }

    render() {
        return (
            <li className="list-group-item" onClick={()=>this.onVideoClick(this.video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img src={this.imageUrl} className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}
