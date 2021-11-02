import { Component } from 'react';
import style from 'styled-components';
import logos from '../assets/activities';

class Sidebar extends Component {

  StyledBar = style.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background-color: #020203;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  z-index: -1;
  padding: 1em
`;

Logos = style.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
`;

Logo = style.li`
  transform: scale(.8);
  background-color: #fff;
  padding: .5em;
  border-radius: 6px;
`;

Copyright = style.p`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin: 0 auto;
  width: 10px;
  font-size: .5em;
`;

  render() {
    return (
      <this.StyledBar>
        <this.Logos>
          {logos.map((logo, i) => (
            <this.Logo key={i}><img src={logo} alt='' /></this.Logo>
          ))}
        </this.Logos>
        <this.Copyright>Copiryght, SportSee 2020</this.Copyright>
      </this.StyledBar>
    );
  }
}

export default Sidebar;
