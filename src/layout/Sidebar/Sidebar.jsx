import { Component } from 'react';
import logos from '../../assets/activities';
import { StyledBar, Logos, Logo, Copyright } from './style';

class Sidebar extends Component {

  render() {
    return (
      <StyledBar>
        <Logos>
          {logos.map((logo, i) => (
            <Logo key={i}><img src={logo} alt='' /></Logo>
          ))}
        </Logos>
        <Copyright>Copiryght, SportSee 2020</Copyright>
      </StyledBar>
    );
  }
}

export default Sidebar;
