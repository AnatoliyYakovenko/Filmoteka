import { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseYear, setReleaseYear] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const contextValue = {
    allMovies,
    searchMovies,
    searchQuery,
    isFormSubmitted,
    selectedGenres,
    genres,
    releaseYear,
    isFavorite,
    currentPage,
    totalPages,
    setAllMovies,
    setSearchMovies,
    setSearchQuery,
    setIsFormSubmitted,
    setSelectedGenres,
    setGenres,
    setReleaseYear,
    setIsFavorite,
    setCurrentPage,
    setTotalPages,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
