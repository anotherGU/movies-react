import { lazy, Suspense } from "react";
import "./App.css";
// import Main from "./pages/Main/Main";
// import Movies from "./pages/Movies/Movies";
// import MoviePage from "./pages/MoviePage/MoviePage";

import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./pages/Main/Main"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/movie/:id" element={<MoviePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
