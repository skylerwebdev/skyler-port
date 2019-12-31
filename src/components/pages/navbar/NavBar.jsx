import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../style/css/Nav.css";
import logo from '../../images/logo.png'
import AppRouter from "../../configs/AppRouter";
const NavBar = () => {
  //SETS THE STATE OF THE SHOWN MENU
  const [showMenu, setShowMenu] = useState(false);
  //FUNCTION TO TOGGLE MENU
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const menuVis = showMenu ? "show" : "hide";

  return (
    <>
    <nav>
      <ul className="menu">
        <li className="navLogo"><img className='logoImage' src={logo}></img></li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="projects">Projects</NavLink>
        </li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="freelance">Freelance</NavLink>
        </li>
        <li className={`navItem ${menuVis}`}>
          <NavLink to="contact">Contact</NavLink>
        </li>
        {/* <li className={`navItem navButton ${menuVis}`}>
          <NavLink to="#">Login</NavLink>
        </li>
        <li className={`navItem navButton navSecondary ${menuVis}`}>
          <NavLink to="#">Sign Up</NavLink>
        </li> */}
        <span>
          <i onClick={toggleMenu} className={!showMenu ? `fas fa-bars toggle` : `fas fa-times toggle`} />
        </span>
      </ul>
    </nav>
    <div className="appRouter"><AppRouter /></div>    
</>
  );
};

export default NavBar;
