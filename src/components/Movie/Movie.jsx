import {Link, useLocation} from 'react-router-dom';
import css from './Movie.module.css';

export const Movie = ({movie}) =>{
  const location = useLocation();
  return (
    <Link
    to={`/movies/${movie.id}`}

    />
  )
}
