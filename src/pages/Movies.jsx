import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'components/API/fetch';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Movies.module.css';

export default function Movies () {
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieToSearch) return;
    setSearchQuery(movieToSearch);
    getMovieByQuery(movieToSearch).then(({ results }) => {
    setSearchMovies(results);
    });
  }, [movieToSearch]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="searchMovie"
            autoFocus
            placeholder="Search movie"
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
      </header>
      <main>
       { isFormSubmitted && searchMovies?.length>0 && (<MovieList movies={searchMovies} />)}
       { isFormSubmitted && searchMovies?.length<=0 && (<p className={css.noFound}>Nothing found... Please try to search another movie!</p>)}
      </main>
    </>
  );
}
