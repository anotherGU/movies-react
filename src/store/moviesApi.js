import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTVjMTcwYTg3NTRmNjI3Mzg3ZjdlMmJmYTQyNTQ2NSIsIm5iZiI6MTcxOTY2NjUzMC45NjQ2NzQsInN1YiI6IjY2M2U0MmQ5YWRkNzAxMWMzMzMwZWQyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOFI56HebJLLX57Joq1IwpXGS4tOTlLV0Rv2KJDMNO4";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getTrendsMovies: build.query({
      query: () => "trending/movie/day?language=en-US",
    }),
    getTrendsSeries: build.query({
      query: () => "trending/tv/day?language=en-US",
    }),
    getMoviesGenres: build.query({
      query: () => "genre/movie/list?language=en",
    }),
    getMovies: build.query({
      query: ({page, genres}) => `discover/movie?language=en${page ? `&page=${page}` : ''}${genres ? `&with_genres=${genres}` : ''}`,
    }),
    getMovieById: build.query({
      query: (id) => `movie/${id}?language=en-US`,
    }),
    getSeriesById: build.query({
      query: (id) => `tv/${id}?language=en-US`,
    }),
    getMovieActorsById: build.query({
      query: (id) => `movie/${id}/credits?language=en-US`
    }),
    getSimilarMoviesById: build.query({
      query: (id) => `movie/${id}/similar?language=en-US`
    }),
    getMovieByName: build.query({
      query: (title) => `search/movie?query=${title}`
    }),
  }),
});

export const {
  useGetTrendsMoviesQuery,
  useGetMoviesGenresQuery,
  useGetTrendsSeriesQuery,
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetSeriesByIdQuery,
  useGetMovieActorsByIdQuery,
  useGetSimilarMoviesByIdQuery,
  useGetMovieByNameQuery
} = moviesApi;
