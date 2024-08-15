import React from "react";

import { Link } from "react-router-dom";

import Card from "../../components/Card/Card";

import { Swiper, SwiperSlide } from "swiper/react";

const SuggestedMovies = ({movie, similars, baseUrl}) => {
    console.log('suggested loaded')
  return (
    <div className="suggestion__movies">
      <p className="suggestion__title">Suggestion like "{movie.title}"</p>
      <div className="suggestion__movies__row">
        <Swiper spaceBetween={0} slidesPerView={6}>
          {similars.results.map((el) => (
            <SwiperSlide key={el.id}>
              <Link to={`/movies/movie/${el.id}`}>
                <Card poster={`${baseUrl}${el.poster_path}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuggestedMovies;
