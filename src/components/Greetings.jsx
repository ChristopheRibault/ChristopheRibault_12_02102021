import { Component } from 'react';
import PropTypes from 'prop-types';

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

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greetings;
