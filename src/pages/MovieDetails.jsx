import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { getMovieInfo } from 'components/API/fetch';
import Loader from 'components/Loader/Loader';

import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getMovieInfo(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  if (!movie) {
    return null;
  }
  const {
    poster_path,
    original_title,
    title,
    name,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = movie;
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <>
      <div className={css.backContainer}>
        <Link className={css.goBack} to={backLinkHref}>
          Go back
        </Link>
      </div>
      <div className={css.movie}>
        <div className={css.imgContainer} width="240">
          <img
            className={css.image}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://www.drupal.org/files/project-images/broken-image.jpg'
            }
            alt={original_title}
          />
        </div>
        <div className={css.movieDescription}>
          <h2 className={css.movieName}>{title || name}</h2>
          <div className={css.gridContainer}>
            <i className={css.movieItemTitle}>Vote / Votes</i>
            <div className={css.value}>
              <span className={css.voteFocus}>{vote_average}</span>
              <span> / </span>
              <span className={css.votesUnactive}>{vote_count}</span>
            </div>
            <i className={css.movieItemTitle}>Popularity</i>
            <span className={css.value}>{popularity}</span>
            <i className={css.movieItemTitle}>Original Title</i>
            <span className={css.value}>{original_title}</span>
          </div>
          <h3 className={css.aboutTitle}>About</h3>
          <article className={css.aboutText}>{overview}</article>
          <div className={css.btnContainer}>
            <Link
              className={css.detailLink}
              to="reviews"
              state={{ from: backLinkHref }}
            >
              Go through the reviews
            </Link>
            <Link
              className={css.detailLink}
              to="cast"
              state={{ from: backLinkHref }}
            >
              Get to know the team
            </Link>
          </div>
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
}
