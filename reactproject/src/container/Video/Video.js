import React, {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import youtubeAPI from '../../api/youtube'
import VideoDetail from '../../components/VideoDetail/VideoDetail'
import VideoItem from '../../components/VideoItem/VideoItem'

const Video = () => {    
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {id} = useLocation().state;

    const getRelatedVideos = async id => {
        const response = await youtubeAPI.get('/search', {
            params: {
                relatedToVideoId: id
            }
        });
        setRelatedVideos(response.data.items);
    }

    const getVideoById = async id => {
        const response = await youtubeAPI.get('/videos', {
            params: {
                id 
            }
        });
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
        getRelatedVideos(video.id.videoId);
    }

    useEffect(() => {
        getVideoById(id);
        getRelatedVideos(id);
    },[]);

    return(
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <div className="ui relaxed divided list">
                            {
                                relatedVideos.map(relatedVideos => {
                                    return <VideoItem video={relatedVideos} onVideoSelect={onVideoSelect}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;