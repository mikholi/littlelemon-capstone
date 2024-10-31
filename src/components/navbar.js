import style from './navbar.css';
import Logo from './../images/Logo.svg';
import React from 'react';
// Import Link if using react-router for navigation
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="Navbar">
                <img src={Logo} alt="logo" className="Logo" />
                <ul className="NavLinks">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Order online</a>
                    </li>
                    <li>
                        <a href="#">Login</a> Tänne vielä linkkejä
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default Navbar;
