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
    this.state = { 
      data: {},
      activeX: '100%',
    };
  }

  StyledChart = styled.div`
    position: relative;
    grid-area: duration;
    background-color: #FF0000;
    border-radius: 5px;
  `;

  StyledTitle = styled.g`
    font-size: 1em;
    fill: #fff;
    opacity: 0.5
  `;

  formatTicks(value) {
    const days = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];
    return days[value];
  }

  onMouseMove(e) {
    const activeX = e.activeCoordinate?.x || '100%';
    this.setState({ activeX });
  }

  componentDidMount() {
    fetcher.get(this.props.id, 'average-sessions')
      .then(data => this.setState(data));
  }

  render() {
    return (
      <this.StyledChart>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart 
            data={this.state.data.sessions}
            onMouseMove={this.onMouseMove.bind(this)}
            margin={{
              top:20,
              right: 5,
              left: 5,
              bottom: 20,
            }}
          >
            <Customized 
              component={() => <this.StyledTitle>
                <text
                  y='10%'
                  x='5%'
                >Durée moyenne des</text>
                <text
                  y='20%'
                  x='5%'
                >sessions</text>
              </this.StyledTitle>} 
            />
            <Customized
              component={() => <rect
                x={this.state.activeX}
                y='0'
                width='100%'
                height='100%'
                fill='#000'
                opacity='0.15'
              />}
            />
            <XAxis 
              axisLine={false}
              tickLine={false}
              tickFormatter={this.formatTicks}
              stroke='#fff'
            />
            <YAxis hide domain={[ 'dataMin - 5', 'dataMax + 10' ]} />
            <Line type="monotone" dataKey='sessionLength' stroke='#fff' dot={false} activeDot={true} />
            <Tooltip 
              cursor={false}
              content={<CustomTooltip props={this.props}
            />} />
          </LineChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }

}

export default DurationChart;
