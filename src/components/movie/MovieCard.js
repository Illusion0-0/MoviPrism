import './MovieCard.css';
import { useState, useEffect } from 'react';


export default function MovieCard ({ url, type }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const api_key = process.env.REACT_APP_TMDB_API_KEY;
  useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/'+ url +'?api_key=' + api_key + '&language=en-US')
      .then((result) => result.json())
      .then((resultJSON) => {setMovieDetails(resultJSON); })
    }, [])

  const movieCardStyles= {
    backgroundImage: `url('https://image.tmdb.org/t/p/w342${movieDetails.poster_path}')`
  };

  const movieCardClasses = `c-movie-card ${isExpanded ? 'c-movie-card--expanded' : ''}`;
  return (
    <div className={movieCardClasses}>
      <div className="c-movie-card__poster" style={movieCardStyles}></div>
    </div>
      
  );
}