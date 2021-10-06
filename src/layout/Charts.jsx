import { Component } from 'react';
import { ActivityChart, DurationChart } from '../components';

class Charts extends Component {

  render() {
    return (
      <div>
        <ActivityChart />
        <DurationChart />
      </div>
    );
  }

}

export default Charts;
