import React, { Component } from 'react';


class VideoItem extends Component {

    constructor(props) {
        super(props);
        this.video = this.props.video.snippet;
    }

    onSelectClick = function (event) {
        console.log(this.props.id);
        this.props.onSelectClick(this.props.id);
    }

    render() {
        return (
            <li className="list-group-item" onClick={this.onSelectClick.bind(this)} >
                <div className="col-md-12">
                    <img src={this.video.thumbnails.default.url} alt="thumbnail" className="thumbnail" />
                
                   <h6> {this.video.title} </h6>
                </div>
            </li>
        );
    }
}

export default VideoItem;
