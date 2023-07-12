import './NavBar.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function HideOnScroll ({ children }) {
  const trigger = useScrollTrigger();
  return ( 
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  return (
    <HideOnScroll>
      <AppBar className="navbar" position="fixed">
        <div className="nav-title">
          <Link to="/" className='website'>MoviPrism</Link>
        </div>
        <SearchBar />
        <Link to="/profile" ><AccountBoxIcon className="nav-login" fontSize="large" /></Link>
      </AppBar>
    </HideOnScroll>
  );
}
