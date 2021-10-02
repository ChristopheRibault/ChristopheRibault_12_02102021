import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to='/'>Accueil</NavLink>
        <NavLink exact to='/profil'>Profil</NavLink>
        <NavLink exact to='/settings'>Réglage</NavLink>
        <NavLink exact to='/community'>Communauté</NavLink>
      </nav>
    );
  }
}

export default Navbar;
