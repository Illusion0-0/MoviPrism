import "./profile.css";
import React, { useState,useEffect } from "react";
import { EachMovie } from '../../components/eachMovie';
import { useAuthValue } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { Navigate } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuthValue();
  let [movieList, setMovieList] = useState([]);
  const [userId, setUserId] = useState(0);
  const db = getDatabase();
  const [size, setsz] = useState(0);

  useEffect( () => {
    if(currentUser){
        setUserId(currentUser.uid);
    } else{

    };
  },[currentUser]);
  const api_key = process.env.REACT_APP_TMDB_API_KEY;
  const movies=[];
  useEffect( () => {
  if(userId){
    console.log(userId);
    let processInc=0;
    const dbRef = ref(db, `/wishlist/${userId}`);
    onValue(dbRef,(snapshot) => {
      setsz(snapshot.size);
      snapshot.forEach((childSnapshot) => {
        const id = childSnapshot.key;
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key='+ api_key +'&language=en-US')
        .then((result) => result.json())
        .then((dat) => {
        movies.push(dat);
        processInc++;
        if(processInc==snapshot.size){
          updateList();
        }
        });
      });
      }, {
      onlyOnce: true
      });
    }
  },[userId]);

  const updateList = () => {
    setMovieList(movies); 
  }

  return (
    !auth.currentUser?.emailVerified ?(
      <Navigate to="/login" replace />
    ) : (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <span onClick={() => {signOut(auth); <Navigate to="/" replace />} }>Sign Out</span>
      </div>
      <center><h1>Wishlist {`(${size})`}</h1></center>
      {movieList.length > 0 ? 
      <div className='gridView'>
                            {
                                movieList.map((movie, index) => {     
                                    return (
                                        <div>
                                            <a href={`/movie/${movieList[index]['id']}`}>
                                            <EachMovie key={index} index={index} id={movieList[index]['id']} bgImage={movieList[index]["backdrop_path"]} movieGenres={movieList[index]["genres"]} moviePoster={movieList[index]["poster_path"]} movieRD={movieList[index]["release_date"]} movieTitle= {movieList[index]["title"]} movieDescription={movieList[index]["overview"]} movieRating={movieList[index]["vote_average"]} movieLanguage={movieList[index]["original_language"] } />
                                            </a>
                                        </div>
                                    )
                                })
                            }
      </div>:''}
      
    </div>
    )
  );
}

export default Profile;
