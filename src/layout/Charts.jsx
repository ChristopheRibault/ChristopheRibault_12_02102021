import { Component } from 'react';
import { ActivityChart, DurationChart } from '../components';

class Charts extends Component {

  render() {
    return (
      <div>
        <ActivityChart id={this.props.id} />
        <DurationChart id={this.props.id} />
      </div>
    );
  }

}

export default Charts;
