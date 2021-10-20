import { Component } from 'react';
import { ResponsiveContainer, Customized, RadialBarChart, RadialBar } from 'recharts';
import styled from 'styled-components';
import { ScoreLegend } from '.';
import Fetcher from '../utils/fetcher';

const fetcher = new Fetcher();

class ScoreChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  StyledChart = styled.div`
    grid-area: score;
    background-color: #fbfbfb;
    border-radius: 5px;
    font-size: .7em;
  `;

  componentDidMount() {
    fetcher.get(this.props.id)
      .then(data => this.setState({ score: data.data.score }));
  }

  render() {
    
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

export default ScoreChart;
