import React from 'react';

//if component state is changed react calls render method and re-render all children to

export default class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            term: ''
        };
    }

    onInputChange(event) {

    }

    render() {
        return (
            <span>
                <label>Search video</label>
                <input value={this.state.term} onChange={this.onInputChange.bind(this)} type="text"
                       placeholder="Search video"/>
            </span>
        );
    }
}