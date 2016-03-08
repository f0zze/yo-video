import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDQBB3V2zLIkPc2m1tDbGKqnx6NSHTJxZg';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.videoSearch("Yamaha R1");

        this.state = {
            videos: [],
            selectedVideo: null
        }
    }


    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);

        return (
            <span>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                           videos={this.state.videos}/>
            </span>
        );
    }


    videoSearch(term) {
        YTSearch({
                key: API_KEY,
                term: term
            },
            (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
                //this.setState({videos:videos}) ,if key value is equals use videos
            });
    }

}

ReactDOM.render(<App />, document.querySelector(".container"));