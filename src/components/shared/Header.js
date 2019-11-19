import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
  logOut = () => {
    localStorage.removeItem('pulseToken');
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <img className="logo-img" src="https://res.cloudinary.com/bahati/image/upload/v1572334416/samples/Mystuff/pulse_vjdvgh.png" />
          <h1>
            <i className="fas fa-code" />
            {' '}
PULSE
          </h1>
          <ul>
            <li>
              <NavLink
                to="/profile"
                title="Dashboard"
              >
                <i className="fas fa-user" />
                <span className="m-1">Profile</span>

              </NavLink>
            </li>
            <li><Link onClick={() => this.logOut()} to="/login">Sign Out</Link></li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
