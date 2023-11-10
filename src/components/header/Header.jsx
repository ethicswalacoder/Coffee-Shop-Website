import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import {links} from "../../Data";
import {FaStream} from "react-icons/fa";
import './header.css';

const Header = () => {
   const [colorChange, setColorChange] = useState(false);
   const changeNavbarColor = ()=> {
    if(window.scrollY >= 100) {
        setColorChange(true);
    }else {
        setColorChange(false);
    }
   };
   window.addEventListener("scroll", changeNavbarColor);
  return (
   <header className="header">
    <nav className={`nav  sticky ${colorChange ? "navbar colorChange" : "navbar"}` } id="navbar">
        <a href="/" className="nav__logo">
            <img src={logo} alt='' className="nav__logo-img"/>
        </a>

        <div className="nav__menu">
            <ul className="nav__list">
                {links.map(({name, path  },index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <a href={path} className="nav__link">{name}</a>
                            </li>
                        )
                })}
            </ul>
        </div>
        <div className="nav__toggle">
    <FaStream/>
        </div>
    </nav>
   </header>
  )
}

export default Header
