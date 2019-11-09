import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VideoItem from '../../components/VideoItem/VideoItem'
import youtubeAPI from '../../api/youtube'

const Home = () => {
    const videos = (useLocation().state || {}).videos || [];

    return (
        <div className="ui container" style={{ paddingTop: '10px' }}>
            <div className="ui grid video-list">
                <div className="ui relaxed divided list">
                    {videos.map((video, index) => {
                        return <VideoItem key={video.id.videoId} title={video.snippet.title} url={video.snippet.thumbnails.medium.url} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;