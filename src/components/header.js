import './header.css'
import { useState, useEffect } from 'react';
import { Details } from './details'
import { EachMovie } from './eachMovie';
import { Footer } from './footer';

export const Header = ({ID_movie}) => {
    
    let [movieList, setMovieList] = useState([]);
    let [updateVal, setUpdateVal] = useState(0);
    const [movieID, setMovieID] = useState(ID_movie);
    const [movieDetails, setMovieDetails] = useState({});
    const [index, changeCurrentIndex] = useState(0);
    const [movieGenres, setMovieGenre] = useState( movieDetails['genres']);
    const [movieTitle, setMovieTitle] = useState(movieDetails['title']);
    const [moviePoster, setMoviePoster] = useState(movieDetails['poster_path']);
    const [movieOverview, setMovieOverview] = useState(movieDetails['overview']);
    const [movieReleaseDate, setMovieReleaseDate] = useState(movieDetails['release_date']);
    const [movieVoteAverage, setMovieVoteAverage] = useState(movieDetails['vote_average']);
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    useEffect(() => {
        const movies=[];
      fetch('http://localhost:5000/?movie_id='+movieID)
      .then((result) => result.json())
      .then((movieJSON) => {
          console.log(movieJSON.results);
          movieJSON.results.map(async (id) => {
            const movie = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + api_key + '&language=en-US');
            const dat = await movie.json()
            movies.push(dat);
    });

    return movies
            
    }).then(async (movies) => {
        console.log(movies);
        await setMovieList(movies); 
    })
      .catch((e) => console.log(e))
      .finally(() => {setUpdateVal(1); })
    }, [movieID])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + api_key + '&language=en-US')
        .then((result) => result.json())
        .then((resultJSON) => {
            setMovieID(resultJSON['id']); 
            setMovieDetails(resultJSON);
            setMovieGenre(resultJSON['genres']);
            setMovieTitle(resultJSON['title']);
            setMoviePoster(resultJSON['poster_path']);
            setMovieOverview(resultJSON['overview']);
            setMovieReleaseDate(resultJSON['release_date']); 
            setMovieVoteAverage(resultJSON['vote_average']);
            // console.log(resultJSON['title'])
        })
        .catch((e) => console.log(e))
        .finally(() => {setMovieGenre(movieDetails['genres']);})  
    },[movieList,movieID]);

    function changeMovie(index) {
        console.log(movieList[index]['id']);
        movieList.length > 0 ? setMovieID(movieList[index]['id']) : setMovieID(movieID);
        console.log(movieID);
        changeCurrentIndex(index);
        setMovieGenre(movieDetails['genres']);
        scrollToTop();
    }

    function scrollToTop() {
        //
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>   
            {
                movieList.length > 0 ? 
                <div>
                        <div>
                            <Details id='top' movieId={movieID} movieGenres={movieDetails['genres']} runtime={movieDetails['runtime']} homepage={movieDetails["homepage"]} budget={movieDetails["budget"]} status={movieDetails["status"]} tagline={movieDetails['tagline']} released={movieDetails['released']} bgImage={movieDetails["backdrop_path"]} moviePoster={moviePoster} movieRD={movieReleaseDate} movieTitle= {movieTitle} movieDescription={movieOverview} movieRating={movieVoteAverage} movieLanguage={movieDetails['original_language']} />
                        </div>
                        <div><center><h1>Recommended For You</h1></center></div>
                        <div className='gridView'>
                            {
                                movieList.map((movie, index) => {     
                                    return (
                                        <div>
                                            <a href={`/movie/${movieID}`}>
                                            <EachMovie key={index} index={index} id={movieList[index]['id']} onClickFunc={changeMovie} bgImage={movieList[index]["backdrop_path"]} movieGenres={movieList[index]["genres"]} moviePoster={movieList[index]["poster_path"]} movieRD={movieList[index]["release_date"]} movieTitle= {movieList[index]["title"]} movieDescription={movieList[index]["overview"]} movieRating={movieList[index]["vote_average"]} movieLanguage={movieList[index]["original_language"] } />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                : <Details bgImage='' moviePoster='' movieRD='Release Date' movieTitle= 'Movie Title' />

            }
            <button onClick={(e)=> { scrollToTop(); }} className='pageBtn'> Back </button>
            <span style={{color: 'white', marginRight: '15px'}}> </span>
            <button className='pageBtn' onClick={(e)=> { scrollToTop(); movieList.length > 0 ? setMovieID(movieList[0]['id']) : setMovieID(ID_movie); changeCurrentIndex(0); setMovieGenre(movieDetails['genres']);}} > Next </button>
            <Footer />
        </div>
    )
}