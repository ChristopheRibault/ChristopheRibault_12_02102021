import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from 'styled-components';

const Nav = style.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-contents: space-evenly;
  gap: 3rem;
`;

const StyledNavLink = style(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <StyledNavLink exact to='/'>Accueil</StyledNavLink>
        <StyledNavLink exact to='/profil'>Profil</StyledNavLink>
        <StyledNavLink exact to='/settings'>Réglage</StyledNavLink>
        <StyledNavLink exact to='/community'>Communauté</StyledNavLink>
      </Nav>
    );
  }
}

export default Navbar;
