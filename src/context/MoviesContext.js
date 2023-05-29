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

  // const [score, setScore] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selectedAnswers, setSelectedAnswers] = useState([]);

  // const resetMovies = () => {
  //   setReleaseYear(0);
  //   setCurrentQuestion(0);
  //   setSelectedAnswers([]);
  // };
  const contextValue = {
    allMovies,
    searchMovies,
    searchQuery,
    isFormSubmitted,
    selectedGenres,
    genres,
    releaseYear,
    isFavorite,
    setAllMovies,
    setSearchMovies,
    setSearchQuery,
    setIsFormSubmitted,
    setSelectedGenres,
    setGenres,
    setReleaseYear,
    setIsFavorite,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
