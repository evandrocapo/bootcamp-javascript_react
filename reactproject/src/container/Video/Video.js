import React, {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import youtubeAPI from '../../api/youtube'
import VideoDetail from '../../components/VideoDetail/VideoDetail'

const Video = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    const {id} = useLocation().state;

    console.log(useLocation())

    const getVideoById = async (id) => {
        const response = await youtubeAPI.get('/videos', {
            params: {
                id 
            }
        });
        setSelectedVideo(response.data.items[0])
    }

    const getRelatedVideos = async (id) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                relatedToVideoId: id
            }
        });
        setRelatedVideos(response.data.items);
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
                            {/* {lista de videos} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;