import React from "react";
import "./MovieActors.css";

import ActorProfile from "../ActorProfile/ActorProfile";

import { Swiper, SwiperSlide } from "swiper/react";

const MoviesActors = ({ actors, baseUrl }) => {
  console.log('actors loaded')
  return (
    <div className="movie__actors">
      <p className="actors">Actors</p>
      <div className="movie__actors__row">
        <Swiper slidesPerView={7}>
          {actors.cast.map((actor) => (
            <SwiperSlide key={actor.id}>
              <ActorProfile actor={`${baseUrl}${actor.profile_path}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MoviesActors;
