import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import Card from "../Card/Card";

import "swiper/css";

const Slider = ({ movies, url }) => {
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={6}>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`movies/movie/${movie.id}`}>
              <Card key={movie.id} poster={`${url}${movie.poster_path}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
