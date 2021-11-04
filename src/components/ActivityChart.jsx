import { Component } from 'react';
import { BarChart, Tooltip, XAxis, YAxis, Legend, Bar, ResponsiveContainer, Customized, CartesianGrid } from 'recharts';
import Service from '../utils/service';
import { ActivityTooltip as CustomTooltip } from '.';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ActivityChart extends Component {
  constructor(props) {
    super(props);
    this.service = new Service(props.id);
    this.state = { 
      sessions: [],
      error: null,
    };
  }

  /**
   * @param {string} value
   * @returns {ReactElement}
   */
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
    this.service.getSessions()
      .then(sessions => this.setState({ sessions }))
      .catch(error => this.setState({ error }));
  }

  StyledChart = styled.div`
    position: relative;
    grid-area: activity;
    padding: 1em;
    background-color: #fbfbfb;
    border-radisu: 5px;
  `;

  render() {

    if (this.state.error) {
      return <div>Error: Can't display chart</div>;
    }
    
    return (
      <this.StyledChart>
        <ResponsiveContainer width='100%' height={200}>
          <BarChart data={this.state.sessions}>
            <Customized component={() => <text
              fontSize='1em'
              fontWeight={500}
              fill='#000'
              x='0%'
              y='20%'
            >Activité quotidienne</text>} />
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <XAxis axisLine={false} tickLine={false}/>
            <YAxis yAxisId='kilAxis' orientation='right' axisLine={false} tickLine={false} type="number" domain={[ 'dataMin -1', 'dataMax + .5' ]} allowDecimals={false} />
            <YAxis hide yAxisId='calAxis' orientation='right' />
            <Tooltip content={<CustomTooltip props={this.props} />} />
            <Legend formatter={this.formatLegend} align='right' verticalAlign='top' iconType='circle' iconSize={10} height={60} />
            <Bar barSize={7} yAxisId='kilAxis' dataKey="kilogram" fill="#282D30" radius={[ 3, 3, 0, 0 ]} />
            <Bar barSize={7} yAxisId='calAxis' dataKey="calories" fill="#E60000" radius={[ 3, 3, 0, 0 ]} />
          </BarChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }

}

ActivityChart.props = {
  id: PropTypes.number.isRequired,
};

export default ActivityChart;
