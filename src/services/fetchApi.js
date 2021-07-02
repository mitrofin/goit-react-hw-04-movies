const API_KEY = 'a21b863d8f80c5c7e49cfa7d2fc0ceb9';

const fetchTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
  );
};

const fetchCastById = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchReviewsById = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchPopular = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );
};
const fetchByQuery = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`,
  );
};

const fetchById = async movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
};

const fetchAPI = {
  fetchCastById,
  fetchTrending,
  fetchReviewsById,
  fetchPopular,
  fetchByQuery,
  fetchById,
};

export default fetchAPI;
