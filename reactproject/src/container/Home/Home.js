import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import VideoItem from '../../components/VideoItem/VideoItem'
import youtubeAPI from '../../api/youtube'
import './Home.css'

const Home = () => {
    const history = useHistory();
    const videos = (useLocation().state || {}).videos || [];

    const onVideoSelect = (video) => {
        history.push({
            pathname: '/video',
            state: {
                id: video.id.videoId
            }
        })
    }

    return (
        <div className="ui container">
            <div className="ui grid video-list">
                <div className="ui relaxed divided list">
                    {videos.map((video, index) => {
                        return <VideoItem 
                        key={video.id.videoId} 
                        video={video}
                        onVideoSelect={onVideoSelect}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;