import './MovieRow.css';
import MovieCard from './MovieCard';
// import Carousel from 'carousel-react-rcdev'
import { Link } from 'react-router-dom';

export default function MovieRow ({ category, type, url }) {
  
  const movies = url;
  return (
    <div className="c-movie-row">
    <h2 className="c-movie-row__title">{category}</h2>
      <div className="c-movie-row__container">
        {/* <Carousel> */}
        {movies.map((urlID,index) => {
              return (
                <Link to={`/movie/${urlID}`}>
                <MovieCard
                  key={index}
                  index={index}
                  url={urlID}
                  type={type}
                />
                </Link>
              )
        })}
        {/* </Carousel> */}
      </div>
    </div>
  );
}