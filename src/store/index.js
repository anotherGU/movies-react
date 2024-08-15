import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import seriesReducer from "./seriesSlice"
import genresReducer from "./genresSlice"
import { moviesApi } from "./moviesApi";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer, 
    genres: genresReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(moviesApi.middleware)
});
