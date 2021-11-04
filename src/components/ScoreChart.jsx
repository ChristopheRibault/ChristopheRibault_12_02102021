import { Component } from 'react';
import { ResponsiveContainer, Customized, RadialBarChart, RadialBar } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ScoreLegend } from '.';
import Service from '../utils/service';

class ScoreChart extends Component {

  constructor(props) {
    super(props);
    this.service = new Service(props.id);
    this.state = {
      score: 0,
      error: null,
    };
  }

  StyledChart = styled.div`
    grid-area: score;
    background-color: #fbfbfb;
    border-radius: 5px;
    font-size: .7em;
  `;

  componentDidMount() {
    this.service.getScore()
      .then(score => this.setState({ score }))
      .catch(error => this.setState({ error }));
  }

  render() {

    if (this.state.error) {
      return <div>Error: Can't display chart</div>;
    }
    
    return (
      <this.StyledChart>
        <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart 
          innerRadius="70%" 
          outerRadius="100%" 
          data={[{ score: 1, fill:'#fbfbfb' }, { score: this.state.score }]} 
          startAngle={90} 
          endAngle={450}
        >
          <Customized component={<ScoreLegend score={this.state.score} />} />
          <RadialBar minAngle={15} clockWise={false} dataKey='score' fill='#ff0000' cornerRadius={20} />
        </RadialBarChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }
}

ScoreChart.props = {
  id: PropTypes.number.isRequired,
};

export default ScoreChart;
