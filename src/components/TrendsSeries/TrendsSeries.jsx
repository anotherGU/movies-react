import "./TrendsSeries.css";
import { useSelector } from "react-redux";

import Slider from "../Slider/Slider";

import { FaArrowRight } from "react-icons/fa6";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TrendsSeries = () => {
  const series = useSelector((state) => state.series.trends);

  return (
    <div className="trends__series">
      <div className="trends__header">
        <p className="trends__title">Trends Series</p>
        <div className="trends__more">
          <p className="trends__see__more">See More</p>
          <FaArrowRight className="trends__arrow" />
        </div>
      </div>
      <Slider movies={series} url={IMAGE_BASE_URL} />
    </div>
  );
};

export default TrendsSeries;
