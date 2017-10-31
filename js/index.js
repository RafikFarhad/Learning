import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';
import Title from './components/Title'

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFor: ""
        };
    }
    onTitleChange(str){
        // console.log("hello + " + str);
        this.setState({searchFor: str});
    }
    render() {
        return (
            <div> 
                <Title title="MeTube" />
                <SearchBar onTitleChange={this.onTitleChange.bind(this)} />
                <Title title={this.state.searchFor}></Title>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));
