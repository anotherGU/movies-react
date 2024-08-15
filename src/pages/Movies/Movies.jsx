import { useEffect, useState } from "react";
import "./Movies.css";
import {
  useGetMoviesGenresQuery,
  useGetMoviesQuery,
  useGetMovieByNameQuery,
} from "../../store/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesGenres } from "../../store/genresSlice";
import { setMovies, resetMovies } from "../../store/moviesSlice";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "../../components/Card/Card";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movies = () => {
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");

  const movies = useSelector((state) => state.movies.movies);
  const activeGenres = useSelector((state) => state.genres.activeMovieGenres);

  const { data: genresData, isLoading } = useGetMoviesGenresQuery();
  const { data: moviesList, isLoadingMovies } = useGetMoviesQuery({
    page: activePage,
    genres: activeGenres.join(","),
  });
  const { data: moviesByName } =
    useGetMovieByNameQuery(search, {
      skip: !search,
    });

  const dispatch = useDispatch();

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setActivePage((prevPage) => prevPage + 1);
    }
  };

  const searchByWord = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    setActivePage(1);
    dispatch(resetMovies());
  }, [activeGenres, dispatch]);

  useEffect(() => {
    if (moviesList && moviesList.results) {
      dispatch(setMovies(moviesList.results));
    }
  }, [moviesList, dispatch]);

  useEffect(() => {
    if (moviesByName && moviesByName.results) {
      dispatch(resetMovies());
      dispatch(setMovies(moviesByName.results));
    }
  }, [moviesByName, dispatch]);

  useEffect(() => {
    if (genresData && genresData.genres) {
      dispatch(setMoviesGenres(genresData.genres));
    }
  }, [genresData, dispatch]);

  if (isLoading || isLoadingMovies) {
    return (
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress thickness={5} size={50} />
        </Box>
      </div>
    );
  }

  return (
    <div className="movies">
      <div className="container">
        <Navbar />
        <p className="movies__header">Movies</p>
        <div className="search">
          <SearchBar search={search} searchByWord={searchByWord} />
        </div>
        <div className="movies__row">
          {movies.map((movie) => (
            <Link key={movie.id} to={`movie/${movie.id}`}>
              <Card poster={`${IMAGE_BASE_URL}${movie.poster_path}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
