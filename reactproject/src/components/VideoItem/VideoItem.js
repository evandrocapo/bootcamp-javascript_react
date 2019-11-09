import React from 'react'

const VideoItem = (props) => {
    const { url, title } = props;

    return(
        <div className="video-item item">
            <img className="ui image" src={url} alt={title}/>
            <div className="content">
                <div className="header">Video {title}</div>
            </div>
            {/* <hr/>    */}
        </div>
    );
};

export default VideoItem;