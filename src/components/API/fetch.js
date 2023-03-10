import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'fcf8166cc673f1c39affaebc2a2648bc',
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieInfo = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};

export const getCast = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};
