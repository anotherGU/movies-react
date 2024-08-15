import {useCallback} from "react";
import "./Filters.css";
import { useSelector, useDispatch } from "react-redux";
import { setMoviesActiveGenres, removeMovieGenre } from "../../store/genresSlice";

import FilterItem from "../FilterItem/FilterItem";

const Filters = () => {

  const dispatch = useDispatch()

  const setActiveGenre = useCallback((id) => {
    dispatch(setMoviesActiveGenres(id));
  }, [dispatch]);
  
  const onRemoveGenre = useCallback((id) => {
    dispatch(removeMovieGenre(id));
  }, [dispatch]);

  const moviesGenres = useSelector((state) => state.genres.moviesGenres);
  const activeGenres = useSelector((state) => state.genres.activeMovieGenres)

  return (
    <div className="filters__row">
      {moviesGenres.map((genre) => (
        <FilterItem onRemove={onRemoveGenre} onClickItem={setActiveGenre} key={genre.id} genre={genre} activeGenres={activeGenres} />
      ))}
    </div>
  );
};

export default Filters;
