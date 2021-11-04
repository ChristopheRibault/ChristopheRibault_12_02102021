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
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DurationTooltip as CustomTooltip } from '.';

import Service from '../utils/service';

class DurationChart extends Component {
  constructor(props) {
    super(props);
    this.service = new Service(props.id);
    this.state = { 
      sessions: [],
      activeX: '100%',
      error: null,
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

  /**
   * Format absisse ticks values
   * @param {number} value 
   * @returns {string}
   */
  formatTicks(value) {
    const days = [ 'L', 'M', 'M', 'J', 'V', 'S', 'D' ];
    return days[value];
  }

  /**
   * Set mouse absisse coordinate to state
   * @param {Event} e 
   */
  onMouseMove(e) {
    const activeX = e.activeCoordinate?.x || '100%';
    this.setState({ activeX });
  }

  componentDidMount() {
    this.service.getDurations()
      .then(sessions => this.setState({ sessions }))
      .catch(error => this.setState({ error }));
  }

  render() {

    if (this.state.error) {
      return <div>Error: Can't display chart</div>;
    }

    return (
      <this.StyledChart>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <LineChart 
            data={this.state.sessions}
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

DurationChart.props = {
  id: PropTypes.number.isRequired,
};

export default DurationChart;
