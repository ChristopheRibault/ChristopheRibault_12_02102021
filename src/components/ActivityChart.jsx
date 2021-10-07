import { Component } from 'react';
import { BarChart, Tooltip, XAxis, YAxis, Legend, Bar, ResponsiveContainer } from 'recharts';
import Fetcher from '../utils/fetcher';
import { Tooltip as CustomTooltip } from '../components';

const fetcher = new Fetcher();

class ActivityChart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}};
  }

  formatLegend = (value) => {
    const map = {
      kilogram: 'Poid (kg)',
      calories: 'Calories brûlées (kCal)',
    };
  
    return (
      <p style={{ display: 'inline-block' }}>{map[value]}</p>
    );
  }

  componentDidMount() {
    fetcher.get(this.props.id, 'activity')
      .then(data => this.setState(data));
  }

  render() {
    return (
      <ResponsiveContainer width='70%' height={200}>
        <BarChart data={this.state.data.sessions}>
          <XAxis axisLine={false} tickLine={false}/>
          <YAxis yAxisId='kilAxis' orientation='right' axisLine={false} tickLine={false} type="number" domain={[ 'dataMin -1', 'dataMax + .5' ]} allowDecimals={false} />
          <YAxis hide yAxisId='calAxis' orientation='right' />
          <Tooltip content={<CustomTooltip props={this.props} />} />
          <Legend formatter={this.formatLegend} align='right' verticalAlign='top' iconType='circle' iconSize={10} height={60} />
          <Bar barSize={7} yAxisId='kilAxis' dataKey="kilogram" fill="#282D30" />
          <Bar barSize={7} yAxisId='calAxis' dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

}

export default ActivityChart;
