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
              <li><p onClick={() => this.props.openModal('signup')} className='nav-button'>Sign Up</p></li>
              <li><p onClick={() => this.props.openModal('login')} className='nav-button'>Login</p></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
