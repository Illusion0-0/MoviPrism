import './MoviPrism.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/common/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import MovieRow from './components/movie/MovieRow';
import movieRoutes from './utils/movieRoutes';
import _ from 'lodash';
import Movies from './components/Movies';
import { Footer } from './components/footer';

export default function MoviPrism () {
  const movieCategories = _.orderBy(movieRoutes, ['order'], ['asc']);
  return (
    <div className="MoviPrism">
      <NavBar /> 
      <BrowserRouter>
        <Routes>         
          <Route exact path="/">
            <FeaturedBanner />
            {movieCategories.map(({category, type, url}) => {
              return <MovieRow key={category} category={category} type={type} url={url} />;
            })}
            <Footer/>
          </Route>
          <Route exact path="/movie/:id">
            <Movies />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
