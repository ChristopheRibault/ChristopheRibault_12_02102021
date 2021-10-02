import { Component } from 'react';
import { Navbar } from '.';
import { Logo } from '../components';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navbar />
      </header>
    );
  }
}

export default Header;
