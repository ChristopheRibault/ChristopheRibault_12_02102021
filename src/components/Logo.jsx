import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

class Logo extends Component {
  render() {
    return (
      <Link to='/'>
        <h1>
          <img src={logo} alt='sportsee logo' />
        </h1>
      </Link>
    );
  }
}

export default Logo;
