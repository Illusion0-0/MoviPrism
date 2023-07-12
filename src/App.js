import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./auth/profile/Profile";
import Register from "./auth/Register";
import VerifyEmail from "./auth/verify/VerifyEmail";
import Login from "./auth/Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import './App.css';
import NavBar from './components/common/NavBar';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import MovieRow from './components/movie/MovieRow';
import movieRoutes from './utils/movieRoutes';
import _ from 'lodash';
import Movies from './components/Movies';
import { Footer } from './components/footer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const movieCategories = _.orderBy(movieRoutes, ['order'], ['asc']);

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact path="/"
            element={
                <>
                <FeaturedBanner />
                {movieCategories.map(({category, type, url},index) => {
                    return (
                      
                      <MovieRow
                        key={index}
                        category={category}
                        type={type}
                        url={url}
                      />
                    )
                })}
                <Footer/>
                </>
            }
          />
          <Route
            exact path="/movie/:id"
            element={
              <>
                <Movies />
              </>
            }
          />
          <Route
            exact path="/profile"
            element={
              <Profile />
            }
          />
          <Route
            path="/login"
            element={
              !currentUser?.emailVerified ? (
                <Login />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/register"
            element={
              !currentUser?.emailVerified ? (
                <Register />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
