import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assests/Dr Adan Saman-logos_transparent.png';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const navbarRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (navbarRef.current) {
          if (window.scrollY > 100) {
            navbarRef.current.classList.add('bg-black');
          } else {
            navbarRef.current.classList.remove('bg-black');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbars" ref={navbarRef}>
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`nav-links ml-auto ${isMenuOpen ? "open" : ""}`}>
                <li><NavLink
                    to="/"
                    end
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >Home</NavLink></li>
                <li><NavLink
                    to="/blog"
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >Blog</NavLink></li>
                <li><NavLink
                    to="/about"
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >About</NavLink></li>
                <li><NavLink
                    to="/contact"
                    style={({ isActive }) => ({ color: isActive ? '#ff6600' : '#007BFF' })}
                >Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
