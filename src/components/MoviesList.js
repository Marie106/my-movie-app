
import React from 'react';
import { useSelector} from 'react-redux';

 const MoviesList = () => {
    const { items, status, error } = useSelector((state) => state.movies);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed'){
        return <div>{error}</div>;
    }
    return (
        <ul>
            {items.map((movie)=>(
            <li key={movie.imdID}>{movie.Title}({movie.Year})</li>
        
    ))}
    </ul>
    );

 };