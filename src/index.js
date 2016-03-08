import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDQBB3V2zLIkPc2m1tDbGKqnx6NSHTJxZg';


class App extends React.Component {
    constructor(props) {
        super(props);
        YTSearch({
                key: API_KEY,
                term: 'yamaha r1'
            },
            (videos) => {
                this.setState({
                    videos
                });
                //this.setState({videos:videos})
            });

        this.state = {videos: []}
    }

    render() {
        return (
            <span>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </span>
        );
    }
}

ReactDOM.render(<App />, document.body);