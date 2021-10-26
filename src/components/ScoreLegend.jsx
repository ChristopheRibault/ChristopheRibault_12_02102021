import PropTypes from 'prop-types';
import { Component } from 'react';

class ScoreLegend extends Component {
  render() {
    return(
      <g>
        <text
          fontSize='3em'
          fill='#000'
          x='35%'
          y='45%'
        >
          { `${this.props.score * 100}%` }
        </text>
        <text
          fontSize='1.2em'
          fill='#c4c4c4'
          x='35%'
          y='55%'
        >
          de votre
        </text>
        <text
          fontSize='1.2em'
          fill='#c4c4c4'
          x='35%'
          y='62%'
        >
          objectif
        </text>
      </g>
    );
  }
}

ScoreLegend.props = {
  score: PropTypes.number.isRequired,
};

export default ScoreLegend;
