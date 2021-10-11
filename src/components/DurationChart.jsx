import { Component } from 'react';
import { 
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  Customized,
} from 'recharts';
import styled from 'styled-components';
import { DurationTooltip as CustomTooltip } from '.';

import Fetcher from '../utils/fetcher';

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
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart data={this.state.data.sessions}>
            <Customized 
              component={() => <g
                fontSize='1em'
                fill='#fff'
                opacity='0.5'
                x='5%'
              >
                <text
                  y='10%'
                >Durée moyenne des</text>
                <text
                  y='20%'
                >sessions</text>
              </g>} 
            />
            <XAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={this.formatTicks}
              stroke='#fff'
            />
            <YAxis hide domain={[ 'dataMin - 5', 'dataMax + 10' ]} />
            <Line type="monotone" dataKey='sessionLength' stroke='#fff' dot={false} activeDot={true} />
            <Tooltip content={<CustomTooltip props={this.props} />} />
          </LineChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }

}

export default DurationChart;
