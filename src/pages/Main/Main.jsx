import { useEffect } from "react";
import "./Main.css";
import { useDispatch } from "react-redux";
import { setTrends } from "../../store/moviesSlice";
import { setSeriesTrends } from "../../store/seriesSlice";
import {
  useGetTrendsMoviesQuery,
  useGetTrendsSeriesQuery,
} from "../../store/moviesApi";

import Navbar from "../../components/Navbar/Navbar";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import TrendsMovies from "../../components/TrendsMovies/TrendsMovies";
import TrendsSeries from "../../components/TrendsSeries/TrendsSeries";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Main = () => {
  const dispatch = useDispatch();

  const { data: moviesTrends, isLoading } = useGetTrendsMoviesQuery();
  const { data: seriesTrends, isLoadingSeries } = useGetTrendsSeriesQuery();

  useEffect(() => {
    if (moviesTrends && moviesTrends.results) {
      dispatch(setTrends(moviesTrends.results));
    }
  }, [moviesTrends, dispatch]);

  useEffect(() => {
    if (seriesTrends && seriesTrends.results) {
      dispatch(setSeriesTrends(seriesTrends.results));
    }
  }, [seriesTrends, dispatch]);

  if (isLoading || isLoadingSeries) {
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
    <div>
      <div className="fullscreen">
        <div className="poster"></div>
        <div className="container">
          <Navbar />
          <MovieInfo />
        </div>
      </div>
      <div className="container">
        <TrendsMovies />
        <TrendsSeries />
      </div>
    </div>
  );
};

export default Main;
