import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Heart } from 'image/heart-icon.svg';
import { ReactComponent as HeartFilled } from 'image/heart-filled-icon.svg';
import css from './Movie.module.css';

export const Movie = ({movie, onRemoveFromFavorites}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setIsFavorite(favoriteMovies.some(favoriteMovie => favoriteMovie.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };
  const addToFavorites = () => {
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
      favoriteMovies.push(movie);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    setIsFavorite(true);
  };

  // const removeFromFavorites = () => {
  //   let favoriteMovies = [];
  //   const storedMovies = localStorage.getItem('favoriteMovies');
  //   if (storedMovies) {
  //     favoriteMovies = JSON.parse(storedMovies);
  //     favoriteMovies = favoriteMovies.filter(favoriteMovie => favoriteMovie.id !== movie.id);
  //     localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  //   }
  //   onRemoveFromFavorites(movie.id);
  //   setIsFavorite(false);

  // };
  const removeFromFavorites = () => {
    const storedMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    let favoriteMovies = [];
    if (storedMovies) {
      favoriteMovies = storedMovies.filter((storedMovie) => storedMovie.id !== movie.id);
      localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }
    onRemoveFromFavorites(movie.id);
    setIsFavorite(false);
  };


  return (
    <div className={css.wrapper}>
    <Link
      to={`/movies/${movie.id}`}
      className={css.films__item}
      key={movie.id}
      state={{ from: location }}
    >
      <div className={css.films__img}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://www.drupal.org/files/project-images/broken-image.jpg'}
          alt={movie.original_title}
          loading="lazy"
        />
      </div>
      </Link>
      <div className={css.films__description}>
        <p className={css.films__name}>{movie.title || movie.name}</p>
        <div className={css.films__container}>
          <p className={css.films__info}>
            {movie.release_date || movie.first_air_date}
          </p>
          <span className={css.films__rating}>
            {movie.vote_average?.toFixed(2)}
          </span>
        </div>
      </div>
      <button
      className={css.favoriteBtn}
      type="button" onClick={toggleFavorite} >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      {isFavorite ? <HeartFilled/> : <Heart/>}
      </button>
    </div>
  );
};
