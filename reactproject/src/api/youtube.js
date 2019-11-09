import axios from 'axios'

const KEY = 'AIzaSyAML7mtjgGN5ODVodcAFFfQxcdkNCcW2sk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});