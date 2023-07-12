import './movies.css';
import { Header } from  './header';

function Movies() {
  var currentLocation = window.location.href;
  var movieId = currentLocation.split("/").pop();
  // console.log(movieId);
  return (
    <div className="movies">
      <Header movieTitle= '' ID_movie={movieId} />
    </div>
  );
}

export default Movies;
