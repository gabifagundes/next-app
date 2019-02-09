import axios from 'axios';

const Movies = {
  getTopMovies: () =>
    axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=39d1528f3615ae1baf09b6cea06c8d42&language=pt-BR"
    ),
  searchMovies: query =>
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=39d1528f3615ae1baf09b6cea06c8d42&language=pt-BR&query=${query}&page=1&include_adult=false`
    ),
  getDetailMovie: id =>
    axios.get(
      `http://api.themoviedb.org/3/movie/${id}/casts?api_key=39d1528f3615ae1baf09b6cea06c8d42&language=pt-BR`
    ),
  getGenreMovie: id =>
    axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=39d1528f3615ae1baf09b6cea06c8d42&language=en-US`
    )
};

export default Movies;