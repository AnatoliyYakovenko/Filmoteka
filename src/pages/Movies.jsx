import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery, getAllMovies, getAllGenres } from 'components/API/fetch';
import {  } from 'components/API/fetch';
import { MovieList } from 'components/MovieList/MovieList';
import GenresList  from 'components/GenresList/GenresList';
import css from './Movies.module.css';

export default function Movies () {
  const [allMovies, setAllMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);


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

  const handleSubmit = event => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setSearchParams({ query: searchQuery });
  };
  const handleGenreSelect = (selectedGenres) => {
    setSelectedGenres(selectedGenres);
  };

  const filterMoviesByGenre = movies => {
    if (selectedGenres.length === 0) {
      return movies;
    } else {
      return movies.filter(movie => {
        return movie.genre_ids?.some(genreId => getGenreId(genres, selectedGenres).includes(genreId));
      });
    }
  };

  const getGenreId = (genres, selectedGenres) => {
    const genreIds = [];
    selectedGenres.forEach(selectedGenre => {
      const genre = genres.find(genre => genre.name === selectedGenre);
      if (genre) {
        genreIds.push(genre.id);
      }
    });
    return genreIds;
  }


console.log(allMovies);



  const filteredMovies = filterMoviesByGenre(searchMovies || allMovies);

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
