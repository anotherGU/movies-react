import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    moviesGenres: [],
    seriesGenres: [],
    activeMovieGenres: [],
  },
  reducers: {
    setMoviesGenres(state, action) {
      state.moviesGenres = action.payload;
    },
    setMoviesActiveGenres(state, action) {
      if (state.activeMovieGenres.includes(action.payload)) {
        return;
      } else {
        state.activeMovieGenres.push(action.payload);
      }
    },
    removeMovieGenre(state, action){
      state.activeMovieGenres = state.activeMovieGenres.filter(id => id !== action.payload)
    },
  },
});

export const { setMoviesGenres, setMoviesActiveGenres, removeMovieGenre } = genresSlice.actions;
export default genresSlice.reducer;
