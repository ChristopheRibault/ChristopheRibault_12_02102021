import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
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
    console.log(this.props);

    return (
      <Nav>
        <StyledNavLink exact to={`/user/${this.props.match.params.id}`}>Accueil</StyledNavLink>
        <StyledNavLink to={`/user/${this.props.match.params.id}/profil`}>Profil</StyledNavLink>
        <StyledNavLink to={`/user/${this.props.match.params.id}/settings`}>Réglage</StyledNavLink>
        <StyledNavLink to={`/user/${this.props.match.params.id}/community`}>Communauté</StyledNavLink>
      </Nav>
    );
  }
}

export default withRouter(Navbar);
