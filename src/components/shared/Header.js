import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {


    render() {
        const activeStyle = {color: "black"}
        const NotactiveStyle = {textDecoration: "none"}
        return (
         <>
        <nav className="header shadow-overlay">

        <span>
        <img className="logo-img" src="https://res.cloudinary.com/bahati/image/upload/v1572334416/samples/Mystuff/pulse_vjdvgh.png"/>
            <span className="logo-txt">PULSE</span>
        </span>
        <ul className="navLinks">
            <li><NavLink to="/profile" style={NotactiveStyle} activeStyle={activeStyle}>Profile</NavLink></li>
            <li><NavLink to="/" style={NotactiveStyle} activeStyle={activeStyle} exact>SignOut</NavLink></li>
        </ul>
        </nav>
      </>
    );
  }
}

export default Header;
