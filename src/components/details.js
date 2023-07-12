import './details.css'
import React, { useState,useEffect } from "react";
import { useAuthValue } from "../context/AuthContext";
import { getDatabase, ref, child,push,remove, get,set } from "firebase/database";
import { useNavigate } from 'react-router-dom';


export const Details = (props) => {
    let navigate = useNavigate();
    const [liked, setLiked] = useState(0);
    const [userId, setUserId] = useState(0);
    const { currentUser } = useAuthValue();
    const dbRef = ref(getDatabase());
    const wished = 0;
    const updateWish = (liked) => {
        
    if(userId){
        if(liked){
            remove(child(dbRef, `/wishlist/${userId}/${props.movieId}`));
        }else{
            set(ref(getDatabase(),`/wishlist/${userId}/${props.movieId}`),{
                exist: true
            });
        }
        setLiked(!liked);
        }
        else{
            navigate('/login');
        }
    }
    useEffect( () => {
        if(currentUser){
            setUserId(currentUser.uid);
        } else{
    
        };
    },[currentUser]);
    useEffect( () => {
        if(userId){
        get(child(dbRef, `wishlist/${userId}/${props.movieId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            setLiked(1);
            console.log('EXIST!');
        }
    }).catch((error) => {
        console.error(error);
    });
    }
    },[userId]);

    let backdropImage = "https://image.tmdb.org/t/p/original" + props.bgImage;
    
    return (
        <div className='detailsPage'>
            <img src={backdropImage} style={{position: 'absolute',opacity: '0.8', width: '100%',filter: 'blur(6px)'}} />
            <div className='banner'>
                <div className='details'>
                    <div className='rateAndLangD'>
                        <h5 className='movieReleaseDateD'> {props.movieRD} </h5>
                        <h5 className='movieRatingD'> {"Rating: " + props.movieRating + "⭐"} </h5>
                        </div>
                    <h1 className='movieTitleD'> {props.movieTitle} </h1>
                    <button
                    onClick={() => updateWish(liked)}
                    >{(liked?'💗':'🤍')}</button>
                    {
                        <i style={{fontWeight: 'lighter'}}> "{props.tagline}" <span className='movieRatingD'>( <span className='movieLanguageD'> {props.movieLanguage} </span> ) </span>                        
                        </i> 
                    }
                
                    <p className='movieDescriptionD'> {props.movieDescription} </p>
                    <hr style={{opacity: '0.1'}}></hr>
                    <div style={{marginBottom: '15px'}}></div>
                    <div style={{display: 'inline-flex'}}> 
                    {
                       props.movieGenres === undefined ? "" : props.movieGenres.map((genre, index) => {
                            return (
                                <div>
                                    <label class="btn btn-swipe-left btn-swipe-left--black" ><span> {genre.name} </span></label>
                                </div>
                                )
                        })
                    }
                    </div>
                    {
                        <div className='rateAndLangD'>
                            <p className='movieRatingD' style={{fontWeight: 'lighter'}}>  {"Runtime: " + props.runtime + " mins"} </p>                    
                            <p className='movieRatingD' style={{fontWeight: 'lighter'}}>  {"Budget: $" + props.budget} </p>                    
                        </div>
                    }
                    
                </div>
                <div>
                    <a href={props.homepage}> <img alt='moviePoster' className='moviePosterD' src={"https://image.tmdb.org/t/p/original" + props.moviePoster}></img> </a>
                </div>
            </div>
        </div>
    );
}