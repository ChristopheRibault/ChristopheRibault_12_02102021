import { Component } from 'react';
import { Navbar } from '.';
import { Logo } from '../components';
import style from 'styled-components';

const StyledHeader = style.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  background-color: #020203;
  color: #fff;
  padding: 1em;
  margin: 0;
`;

class Header extends Component {

  render() {
    return (
      <StyledHeader>
        <Logo />
        <Navbar />
      </StyledHeader>
    );
  }
}

export default Header;
