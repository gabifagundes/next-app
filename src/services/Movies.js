import axios from "axios";

import * as movies from "../constants/Movies";

const Movies = {
  getTopMovies: () =>
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        movies.API_KEY
      }&language=${movies.LANGUAGE}`
    ),
  searchMovies: query =>
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        movies.API_KEY
      }&language=${movies.LANGUAGE}&query=${query}&page=1&include_adult=false`
    ),
  getDetailMovie: id =>
    axios.get(
      `http://api.themoviedb.org/3/movie/${id}/casts?api_key=${
        movies.API_KEY
      }&language=${movies.LANGUAGE}`
    ),
  getGenreMovie: () =>
    axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        movies.API_KEY
      }&language=${movies.LANGUAGE}`
    )
};

export default Movies;
