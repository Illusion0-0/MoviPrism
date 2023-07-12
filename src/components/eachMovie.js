import './eachMovie.css';

const MAX_LENGTH = 250;

export const EachMovie = (props) => {
    const text  = props.movieDescription;
    let poster = "https://image.tmdb.org/t/p/original" + props.moviePoster;
    let backdropImage = "https://image.tmdb.org/t/p/original" + props.bgImage;
    return (
        <div className='movieStack' onClick={(e) => props.onClickFunc(props.index)}>
            <div className="eachMovie">
                <img alt="moviePoster" src={poster} className="moviePoster"/>
                <h1 className="movieTitle"> {props.movieTitle} </h1>
                <h1 className="movieRating"> {props.movieRating} ⭐</h1>
                <h1 className="movieLanguage"> {props.movieLanguage} </h1>
            </div>
            <div className='movieDescription' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ), url(${backdropImage})`}}>
                <h3> {props.movieTitle} </h3>
                <p>{text === undefined ? '' : text.length > MAX_LENGTH ?
                    (
                    <div>
                        {`${text.substring(0, MAX_LENGTH)}...`}<b>Read more</b>
                    </div>
                    ) :
                        <p>{text}</p>
                }
                </p>
            </div>
        </div>
    );
}