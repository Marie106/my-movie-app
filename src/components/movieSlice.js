import { create, createAsyncThunk } from '@reduxjs/toolkit';

export const setchMovie = createASsyncThunk('movies/fetchMovies', async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
const data = await response.json();
return data.Search;
})

const movieSlice  = createSlice9({
    name: 'movies',
    initialState: {
        movie: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducer: (builder) => {
        builder
        .addCase(fetchMovies.pending, (state) =>{
            state.status = 'succeeded';
            state.movies = action.payload;
        })
        .addCase(fetchMovie.reject,(state,action) =>{
            state.status = 'succeeded';
            state.movies = action.payload;

        })
        .assCase(fetchMovies.rejected, (state, action)=>{
            state.status = 'faild';
            state.status = 'failed';
            state,error = action.error.message;
        });
       
    }
});

export default movieSlice.reducer;