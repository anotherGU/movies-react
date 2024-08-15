import React from "react";
import "./MovieInfo.css";

import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const MovieInfo = () => {
  return (
    <div className="movie__info">
      <div className="movie__logo__cont">
        <img
          className="movie__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vault-Tec_Logo.svg/1280px-Vault-Tec_Logo.svg.png"
          alt="movie__logo"
        />
      </div>
      <p className="movie__title">Fallout</p>
      <p className="movie__plot">
        The series depicts the aftermath of the Great War of 2077, an
        apocalyptic nuclear exchange between the United States and China in an
        alternate history of Earth where advances in nuclear technology after
        WWII led to the emergence of a retrofuturistic society and a subsequent
        resource war.
      </p>
      <div className="movie__rating">
        <img src="/images/rating.png" alt="Rating" className="movie__rating" />
      </div>
      <div className="movie__buttons">
        <div className="movie__play">
          <FaPlay />
          <p> Watch Movie</p>
        </div>
        <div className="movie__more__info">
          <p>More Info</p>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
