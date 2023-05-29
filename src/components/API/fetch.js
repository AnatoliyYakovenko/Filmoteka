import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'fcf8166cc673f1c39affaebc2a2648bc',
};

export const getAllGenres = async onFetch => {
  try {
    const { data } = await axios.get('/genre/movie/list');
    onFetch(data.genres);
  } catch (error) {
    toast.error(error.message);
  }
};
export const getAllMovies = async (page, onFetch, totalPagesCallback, releaseYear) => {
  try {
    let releaseYearQuery = '';
    if (releaseYear) {
      releaseYearQuery = `&primary_release_year=${releaseYear}`;
    }

    const { data } = await axios.get(`/discover/movie?page=${page}${releaseYearQuery}`);
    onFetch(data.results);
    totalPagesCallback(data.total_pages);
  } catch (error) {
    toast.error(error.message);
  }
};

export const getTrendingMovie = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page: 1,
      },
    });
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieByQuery = async (
  page,
  query,
  onFetch,
  totalPagesCallback,
  releaseYear
) => {
  try {
    let releaseYearQuery = '';
    if (releaseYear) {
      releaseYearQuery = `&primary_release_year=${releaseYear}`;
    }
    const { data } = await axios.get(`/search/movie?page=${page}${releaseYearQuery}`, {
      params: {
        query,
        page: page,
      },
    });
    onFetch(data.results);
    totalPagesCallback(data.total_pages);
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieInfo = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getReviews = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getCast = async movie_id => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
