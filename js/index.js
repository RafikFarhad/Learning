import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Youtube from 'youtube-api-search';
import Lodash from 'lodash';

import SearchBar from './components/SearchBar';
import Title from './components/Title';
import VideoList from './components/VideoList';
import VideoView from './components/VideoView'

const API_KEY = "AIzaSyD0XC3HO4ncdpv4hNi2eSwKegTbOV8bo3Y";

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchFor: "",
            videos: [],
            selected : null
        };
        this.onKeyChange('Artcell');
    }

    onKeyChange(str){
        // console.log("hello + " + str);
        Youtube({key: API_KEY, term: str}, (data) => {
            this.setState({
                searchFor: str,
                videos: data
            });
        });
    }

    onSelectClick(id) {
        this.setState({selected: this.state.videos[id]});
    }

    render() {
        const onKeyChange = Lodash.debounce(this.onKeyChange, 300);
        return (
            <div> 
                <Title title="MeTube" />
                <SearchBar
                    onKeyChange={onKeyChange.bind(this)}
                 />
                <div className="row text-center">
                    <div className="col-md-8">
                        <VideoView video={this.state.selected} />
                    </div>
                    <div className="sidebar col-md-3">
                        <VideoList 
                        onSelectClick = {this.onSelectClick.bind(this)}
                        videos={this.state.videos} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));
