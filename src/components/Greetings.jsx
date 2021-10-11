import { Component } from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';

class Greetings extends Component {

  StyledGreeting = style.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    font-weight: 500;
    font-size: 2em;
    > * {
      margin-top: 0;
    }
  `;

  StyledName = style.p`
    color: #ff0000;
  `;

  render() {
    return (
      <div>
        <this.StyledGreeting>
          <p>Bonjour</p>
          <this.StyledName>{this.props.name}</this.StyledName>
        </this.StyledGreeting>
        <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
      </div>
    );
  }
}

Greetings.propTypes = {
  name: PropTypes.string,
};

export default Greetings;
