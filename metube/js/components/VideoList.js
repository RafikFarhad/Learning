import React, { Component } from 'react';

import VideoItem from './VideoItem';

class VideoList extends Component {

    constructor(props) {
        super(props);
    }

    onSelectClick = (id) => {
        this.props.onSelectClick(id);
    }

    render() {
        // console.log(this.props.videos);
        return (
            <ul className="list-group">
                {
                    this.props.videos.map((video, i) => {
                        return <VideoItem onSelectClick={this.onSelectClick.bind(this)}
                        id={i} 
                        key={video.etag}
                        video={video} />;
                    })
                }
            </ul>
        );
    }
}


export default VideoList;



