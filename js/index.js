import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar'

const Root = function () {
    return (
        <div> 
            <h1> I'm REACT </h1>
            <SearchBar Value={"serach key"} />
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('app'));
