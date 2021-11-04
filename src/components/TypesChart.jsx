import { Component } from 'react';
import { RadarChart, PolarAngleAxis, Radar, ResponsiveContainer, PolarGrid } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Service from '../utils/service';

class TypesChart extends Component {

  constructor(props) {
    super(props);
    this.service = new Service(props.id);
    this.state = {
      data: [],
      kind: {},
      error: null,
    };
  }

  /**
   * Format radial axe ticks values
   * @param {number} value 
   * @returns {string}
   */
  tickFormatter(value) {
    return this.state.kind?.[value];
  }

  componentDidMount() {
    this.service.getPerformance()
      .then(res => this.setState({ data: res.data, kind: res.kind }))
      .catch(error => this.setState({ error }));
  }

  StyledChart = styled.div`
    grid-area: types;
    background-color: #282d30;
    border-radius: 5px;
    font-size: .7em;
  `;

  render() {

    if (this.state.error) {
      return <div>Error: Can't display chart</div>;
    }

    return (
      <this.StyledChart>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart
            data={this.state.data}
            innerRadius='0%'
            outerRadius='67%'
            startAngle={-150}
            endAngle={210}
          >
            <PolarGrid 
              gridType='polygon'
              radialLines={false}
              polarRadius={[ 12, 20, 35, 50, 65 ]}
              stroke='#fff'
            />
            <PolarAngleAxis
              dataKey='kind'
              type='category'
              tickLine={false}
              tickFormatter={this.tickFormatter.bind(this)}
              stroke='#fff'
              axisLine={false}
            />
            <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }
}

TypesChart.props = {
  id: PropTypes.number.isRequired,
};


export default TypesChart;
