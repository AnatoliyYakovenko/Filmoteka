import { useState, useEffect } from 'react';
import {MovieList} from 'components/MovieList/MovieList';

import css from './Favorite.module.css';

const Favorite = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem('favoriteMovies');
    if (storedMovies) {
      setFavoriteMovies(JSON.parse(storedMovies));
    }
  }, []);
  const handleRemoveFromFavorites = (movieId) => {
    const updatedMovies = favoriteMovies.filter((movie) => movie.id !== movieId);
    setFavoriteMovies(updatedMovies);
    localStorage.setItem('favoriteMovies', JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <h1 className={css.title}>Favorite Movies</h1>
      <MovieList
      movies={favoriteMovies}
      onRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
};

export default Favorite;


