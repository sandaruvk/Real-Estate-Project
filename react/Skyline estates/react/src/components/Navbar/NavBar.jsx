import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import "./NavBar.css";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <div className='logo-text-container'>
          <span className='logo-text'>Skyline</span>
          <span className='logo-text-sub'>Estates</span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu} className={location.pathname === "/" ? "active-link" : ""}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='/aboutus' onClick={closeMenu} className={location.pathname === "/aboutus" ? "active-link" : ""}>
              About Skyline
            </a>
          </li>
          <li className='nav-item'>
            <a href='/properties' onClick={closeMenu} className={location.pathname === "/properties" ? "active-link" : ""}>
              Properties
            </a>
              
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;