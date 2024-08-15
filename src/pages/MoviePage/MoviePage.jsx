import { useState, useEffect, lazy, Suspense } from "react";
import "./MoviePage.css";

import { useParams } from "react-router-dom";
import {
  useGetMovieByIdQuery,
  useGetMovieActorsByIdQuery,
  useGetSimilarMoviesByIdQuery,
} from "../../store/moviesApi";

import Navbar from "../../components/Navbar/Navbar";
import { Box, CircularProgress } from "@mui/material";
import Rating from "@mui/material/Rating";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MoviesActors = lazy(() =>
  import("../../components/MovieActors/MovieActors")
);
const MovieGenres = lazy(() =>
  import("../../components/MovieGenres/MovieGenres")
);
const SuggestedMovies = lazy(() =>
  import("../../components/SuggestedMovies/SuggestedMovies")
);

const MoviePage = () => {
  const { id } = useParams();
  const { data: movie } = useGetMovieByIdQuery(id);
  const { data: actors } = useGetMovieActorsByIdQuery(id);
  const { data: similars } = useGetSimilarMoviesByIdQuery(id);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    if (movie) {
      const img = new Image();
      img.src = `${IMAGE_BASE_URL}${movie.backdrop_path}`;
      img.onload = () => {
        document.documentElement.style.setProperty(
          "--backdrop-image",
          `url(${img.src})`
        );
        setIsPosterLoaded(true);
      };
    }
  }, [movie]);

  if (!movie || !actors || !similars || !isPosterLoaded ) {
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

  console.log(movie);

  return (
    <div className="movie__page">
      <div className="movie__page__fullscreen">
        <div className="movie__poster"></div>
        <div className="container">
          <Navbar />
        </div>
        <div className="container">
          <div className="movie__info">
            <p className="movie__title1">{movie.title}</p>
            <p className="movie__time">
              {movie.runtime + "m"} - {movie.release_date} -{" "}
              {movie.origin_country}
            </p>
            <div className="movie__rating">
              <Rating
                name="read-only"
                value={movie.vote_average}
                readOnly
                max={10}
                size={"large"}
              />
            </div>
            <div className="movie__production__companies">
              <div className="movie__production__companies__row">
                {movie.production_companies.map((company) => (
                  <img
                    src={`${IMAGE_BASE_URL}${company.logo_path}`}
                    alt="company__logo"
                    width={150}
                    key={movie.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__title">About {movie.title}</p>
        <p className="about__paragraph">{movie.overview}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieGenres movie={movie} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MoviesActors actors={actors} baseUrl={IMAGE_BASE_URL} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <SuggestedMovies
            movie={movie}
            baseUrl={IMAGE_BASE_URL}
            similars={similars}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviePage;
