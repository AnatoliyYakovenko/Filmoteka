import { nanoid } from 'nanoid';

import { Movie } from 'components/Movie/Movie';

import css from './MovieList.module.css';

export const MovieList = ({ movies, onRemoveFromFavorites }) => {
  const uniqueMovies = movies.filter((movie, index) => {
    return movies.findIndex(m => m.id === movie.id) === index;
  });
  return (
    <ul className={css.films}>
      {uniqueMovies?.map(movie => {
        return (
          <Movie
            key={nanoid()}
            movie={movie}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        );
      })}
    </ul>
  );
};
