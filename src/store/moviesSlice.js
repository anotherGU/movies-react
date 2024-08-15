import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trends: [],
    movies: [],
  },
  reducers: {
    setTrends(state, action) {
      state.trends = action.payload;
    },
    setMovies(state, action) {
      state.movies.push(...action.payload);
    },
    resetMovies(state) {
      state.movies = []
    },
  },
});

export const { setTrends, setMovies, filteredByGenres, resetMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
