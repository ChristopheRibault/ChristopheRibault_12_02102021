import { Component } from 'react';
import { 
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';
import style from 'styled-components';

import Fetcher from '../utils/fetcher';
import activeDot from '../assets/dot-active.svg';

const fetcher = new Fetcher();

class DurationChart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  StyledChart = style.div`
    background-color: #FF0000;
    border-radius: 5px;
    padding: 1em;
    width: 25%;
    height: 250px;
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
