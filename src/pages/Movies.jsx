import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMovieByQuery, getAllMovies, getAllGenres } from 'components/API/fetch';
import { MovieList } from 'components/MovieList/MovieList';
import GenresList  from 'components/GenresList/GenresList';
import css from './Movies.module.css';

export default function Movies () {
  const [allMovies, setAllMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseYear, setReleaseYear] = useState('');

  const movieToSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    getAllMovies(setAllMovies);
    getAllGenres(setGenres);
  }, []);


  useEffect(() => {
    if (!movieToSearch) return;
    setSearchQuery(movieToSearch);
    getMovieByQuery(movieToSearch).then(({ results }) => {
    setSearchMovies(results);
    });
  }, [movieToSearch]);
  useEffect(() => {
    setIsFormSubmitted(false);
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSearchParams({ query: searchQuery });
  }
  const handleGenreSelect = (selectedGenres) => {
    setSelectedGenres(selectedGenres);
  };

  const filterMoviesByGenreAndYear = movies => {
    let filteredMovies = movies;

    if (selectedGenres.length > 0) {
      const genreIds = getGenreId(selectedGenres);
      filteredMovies = filteredMovies.filter(movie =>
        movie.genre_ids?.some(genreId => genreIds.includes(genreId))
      );
    }

    if (releaseYear) {
      filteredMovies = filteredMovies.filter(
        movie => movie.release_date?.startsWith(releaseYear)
      );
    }

    return filteredMovies;
  };

  const getGenreId = (selectedGenres) => {
    const genreIds = [];
    selectedGenres.forEach(selectedGenre => {
      const genre = genres.find(genre => genre.name === selectedGenre);
      if (genre) {
        genreIds.push(genre.id);
      }
    });
    return genreIds;
  }
  const handleReleaseYearChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, '').slice(0, 4);
    if(!formattedValue){
      toast.error(`Enter year in right format e.g. 2022!`);
    }
    setReleaseYear(formattedValue);
  };
  
  const filteredMovies = filterMoviesByGenreAndYear(searchMovies || allMovies);

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
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
        <form className={css.SearchByYearForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchByYearFormButton}>
          </button>
          <input
            className={css.SearchFormInputByYear}
            type="text"
            autoComplete="off"
            name="releaseYear"
            value={releaseYear}
            placeholder="Release Year"
            onChange={handleReleaseYearChange}
          />
        </form>
        <GenresList
        genres={genres}
        selectedGenres={selectedGenres}
        onGenreSelect={handleGenreSelect}
        />

      </header>
      <main>
      {filteredMovies?.length > 0 ? (
          <MovieList movies={filteredMovies} />
        ) : (
          isFormSubmitted && (
            <p className={css.noFound}>Nothing found... Please try to search another movie!</p>
          )
        )}
      </main>
    </>
  );
}
