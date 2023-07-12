import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './FeaturedBanner.css';
import { useState, useEffect } from 'react';
import HTTP from '../../utils/http';
import { Link } from 'react-router-dom';

export default function FeaturedBanner () {
      const [slideImages, setMovies] = useState([]);
      var b1=14611,b2=21683,b3=45706,b4=406563,b5=18762;
      const api_key = process.env.REACT_APP_TMDB_API_KEY;
      useEffect(() => {
      async function fetchData () {
      const m1 = (await HTTP.get('https://api.themoviedb.org/3/movie/' + b1 + '?api_key='+api_key+'&language=en-US')).data;
      const m2 = (await HTTP.get('https://api.themoviedb.org/3/movie/' + b2 + '?api_key='+api_key+'&language=en-US')).data;
      const m3 = (await HTTP.get('https://api.themoviedb.org/3/movie/' + b3 + '?api_key='+api_key+'&language=en-US')).data;
      const m4 = (await HTTP.get('https://api.themoviedb.org/3/movie/' + b4 + '?api_key='+api_key+'&language=en-US')).data;
      const m5 = (await HTTP.get('https://api.themoviedb.org/3/movie/' + b5 + '?api_key='+api_key+'&language=en-US')).data;
      // console.log(m1,m2,m3,m4,m5);

      const slide = [
        {
          image: m1.backdrop_path,
          url: m1.id,
          title: m1?.name || m1?.title || m1?.original_name,
          desc: m1.overview,
          rating: m1.vote_average
        },
        {
          image: m2.backdrop_path,
          url: m2.id,
          title: m2?.name || m2?.title || m2?.original_name,
          desc: m2.overview,
          rating: m2.vote_average
        },
        {
          image: m3.backdrop_path,
          url: m3.id,
          title: m3?.name || m3?.title || m3?.original_name,
          desc: m3.overview,
          rating: m3.vote_average
        },
        {
          image: m4.backdrop_path,
          url: m4.id,
          title: m4?.name || m4?.title || m4?.original_name,
          desc: m4.overview,
          rating: m4.vote_average
        },
        {
          image: m5.backdrop_path,
          url: m5.id,
          title: m5?.name || m5?.title || m5?.original_name,
          desc: m5.overview,
          rating: m5.vote_average
        }
        
      ];
      setMovies(slide);
    }
    fetchData();
  }, []);

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
  };

  return (
    <div className="slide-container">
      <Fade {...properties}>
      {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="c-featured-banner" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${slideImage.image}')` }}>
                <div className="c-featured-banner-content">
                  <h1 className="c-featured-banner-title">
                  <Link to={`/movie/${slideImage.url}`} className="title">{slideImage.title}</Link>
                  </h1>
                  <p className="c-featured-banner-overview">{slideImage.desc}</p>
                  <p className="c-featured-banner-rating">Rating: {slideImage.rating}/10</p>
                </div>
              </div>
            </div>
      ))} 
      </Fade>
    </div>
  );
}