import { useState, useEffect } from 'react';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { MoviesContext } from "context/MoviesContext";
import { MovieList } from 'components/MovieList/MovieList';
import { getTrendingMovie } from 'components/API/fetch';
import Loader from "components/Loader/Loader";

import css from './Home.module.css';

export default function Home(){
  const{setIsFavorite}=useContext(MoviesContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  const removeFromFavorites = () => {
    setIsFavorite(false);
  };

  return (
    <main>
      <section className={css.gallery}>
        <div className={css.container}>
          <h1 className={css.title}>Trending today</h1>
          <MovieList movies={movies} onRemoveFromFavorites={removeFromFavorites} />
        </div>
      </section>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </main>

  );
};

