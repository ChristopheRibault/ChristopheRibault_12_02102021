import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

class Logo extends Component {
  render() {
    return (
      <Link to='/'>
        <img src={logo} alt='sportsee logo' />
      </Link>
    );
  }
}

export default Logo;
