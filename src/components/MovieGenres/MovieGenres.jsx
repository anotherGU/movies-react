import React from "react";

const MovieGenres = ({movie}) => {
    console.log('genres loaded')
  return (
    <div className="movies__genres">
      <p className="genres">Genres</p>
      <div className="genres__row">
        {movie.genres.map((genre) => (
          <div key={genre.id} className="movie__genre">
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGenres;
