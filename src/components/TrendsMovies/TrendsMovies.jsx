import "./TrendsMovies.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Slider from "../Slider/Slider";

import { FaArrowRight } from "react-icons/fa6";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TrendsMovies = () => {
  const movies = useSelector((state) => state.movies.trends);

  return (
    <div className="trends">
      <div className="trends__header">
        <p className="trends__title">Trends Movies</p>
        <div className="trends__more">
          <p className="trends__see__more"><Link to={"/movies"}>See More</Link></p>
          <FaArrowRight className="trends__arrow" />
        </div>
      </div>
      <Slider movies={movies} url={IMAGE_BASE_URL} />
    </div>
  );
};

export default TrendsMovies;
