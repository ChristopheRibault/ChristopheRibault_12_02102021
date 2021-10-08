import { Component } from 'react';

class ScoreLegend extends Component {
  render() {
    return(
      <g>
        <text
          fontSize={30}
          strock='#000'
          x='30%'
          y='45%'
        >
          { `${this.props.score * 100}%` }
        </text>
        <text
          fontSize={20}
          strock='#c4c4c4'
          x='30%'
          y='55%'
        >
          de votre
        </text>
        <text
          fontSize={20}
          strock='#c4c4c4'
          x='30%'
          y='65%'
        >
          objectif
        </text>
      </g>
    );
  }
}

export default ScoreLegend;
