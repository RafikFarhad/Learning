import React, { Component } from 'react';


class Video extends Component {

    constructor(props) {
        super(props);
        const video = this.props.video;
        // console.error(typeof video);
    }

    render() {
        // console.log(this.props.video);
        if(!this.props.video){
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return (
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={"https://www.youtube.com/embed/"+this.props.video.id.videoId}></iframe>
                </div>
                <div className="title">
                    <h4>{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default Video;
