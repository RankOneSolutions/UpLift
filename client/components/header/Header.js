import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../assets/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='navbar'>
          <div className='button-bar'>
            <ul>
              <li><Link to={'/'} className='nav-button uplift'>Uplift</Link></li>
              <li><Link to={'/'} className='nav-button'>Home</Link></li>
              <li><Link to={'/about'} className='nav-button'>About</Link></li>
            </ul>

            <ul className='profile-bar'>
              <li><Link to={'/signup'} className='nav-button'>Sign Up</Link></li>
              <li><Link to={'/login'} className='nav-button'>Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
