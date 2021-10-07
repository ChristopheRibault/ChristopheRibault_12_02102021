import { Component } from 'react';
import style from 'styled-components';
import { ActivityChart, DurationChart } from '../components';

class Charts extends Component {

  Grid = style.div`
    display: grid;
    grid-template-areas: " activity activity activity total" "duration intensity score total";
    grid-template-rows: 250px 250px;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
  `;

  render() {
    return (
      <this.Grid>
        <ActivityChart id={this.props.id} />
        <DurationChart id={this.props.id} />
      </this.Grid>
    );
  }

}

export default Charts;
