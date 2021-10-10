import { Component } from 'react';
import { PieChart, Pie, ResponsiveContainer, Customized } from 'recharts';
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
    background-color: #fff;
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
          <PieChart>
            <Customized component={<ScoreLegend score={this.state.score} />} />
            <Pie 
              data={[{ score: 1 }]}
              dataKey="score"
              innerRadius={70}
              outerRadius={80}
              fill="#ff0000"
              startAngle={-270}
              endAngle={360 * this.state.score -270}
            />
          </PieChart>
        </ResponsiveContainer>
      </this.StyledChart>
    );
  }
}

export default ScoreChart;
