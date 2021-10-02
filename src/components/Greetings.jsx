import { Component } from 'react';

class Greetings extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Bonjour</p>
          <p>{this.props.name}</p>
        </div>
        <div>message</div>
      </div>
    );
  }
}

export default Greetings;
