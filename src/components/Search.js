import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { fetchMovies} from '../features/movies/moviesSlice';

const Search = ()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch (fetchMovies(searchTerm));
    };

    return (
        <div>
            <input
            type="text"
            value= { searchTerm}
            onchange ={(e) => setSearchTerm(e.target.Value)}
            />
            <button onclick={handleSearch}>Search</button>
            
        </div>
    );
};

export default Search;