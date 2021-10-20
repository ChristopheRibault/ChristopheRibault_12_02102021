import { Component } from 'react';
import style from 'styled-components';
import { ActivityChart, DurationChart, ScoreChart, TypesChart, KeyData } from '../components';

class Charts extends Component {

  Grid = style.div`
    margin-top: 1em;
    display: grid;
    grid-template-areas: " activity activity activity keydata" "duration types score keydata";
    grid-template-rows: 250px 200px;
    grid-template-columns: repeat(3, 1fr) 180px;
    gap: 1em;
  `;

  render() {
    return (
      <this.Grid>
        <ActivityChart id={this.props.id} />
        <DurationChart id={this.props.id} />
        <TypesChart id={this.props.id} />
        <ScoreChart id={this.props.id} />
        <KeyData id={this.props.id} />
      </this.Grid>
    );
  }

}

export default Charts;
