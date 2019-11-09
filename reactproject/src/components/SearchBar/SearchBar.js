import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import youtubeAPI  from '../../api/youtube'
import './SearchBar.css';

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const history = useHistory();

    const onTermChange = (event) => {
        setTerm(event.target.value);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault()
        getVideo(term);
    }

    const getVideo = async (searchTerm) => {
        const response = await youtubeAPI.get('/search', {
            params: {
                q: searchTerm,
                maxResult: 20
            }
        });
        history.push('/',{
            videos: response.data.items
        })
    }

    useEffect(() => {
        getVideo()
    }, [])

    return (
        <div className="ui segment search-bar">
            <img style={{maxWidth: '150px', maxHeight: '150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDQ4nOe3oKs5KbHhxpmnco-usjVzh6oI-GgnAAuz5CfdHNkC_J"/>
            <form onSubmit={onSearchSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input onChange={onTermChange} value={term} type="text"/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar