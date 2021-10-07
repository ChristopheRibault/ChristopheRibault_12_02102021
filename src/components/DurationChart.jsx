import { Component } from 'react';
import { 
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';

import Fetcher from '../utils/fetcher';
import activeDot from '../assets/dot-active.svg';

const fetcher = new Fetcher();

class DurationChart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  StyledChart = styled.div`
    position: relative;
    grid-area: duration;
    background-color: #FF0000;
    border-radius: 5px;
    padding: 1em;
  `;

  StyledTitle = styled.h3`
    position: absolute;
    top: 0;
    color: #fff;
    font-size: .9em;
    font-weight: 500;
  `;

  formatTicks(value) {
    const days = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];
    return days[value];
  }

  componentDidMount() {
    fetcher.get(this.props.id, 'average-sessions')
      .then(data => this.setState(data));
  }

  render() {
    return (
      <this.StyledChart>
        <this.StyledTitle>Durée moyenne des sessions</this.StyledTitle>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={this.state.data.sessions}>
            <XAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={this.formatTicks}
              stroke='#fff'
            />
            <YAxis hide domain={[ 'dataMin', 'dataMax + 10' ]} />
            <Line type="monotone" dataKey='sessionLength' stroke='#fff' dot={false} activeDot={activeDot} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }

}

export default DurationChart;
