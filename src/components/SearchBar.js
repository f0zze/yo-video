import React from 'react';

//if component state is changed react calls render method and re-render all children to

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input onChange={event=>this.onInputChange(event.target.value)} type="text"
                       placeholder="Search video"/>
            </div>
        );
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onSearch(term);
    }
}