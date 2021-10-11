import react from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';

class DurationTooltip extends react.Component {

  CustomTooltip = style.div`
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    > * {
      margin: 0;
      padding: 1rem .8rem;
      font-size: .7em;
      font-weight: 500;
    }
  `;

  render() {
    const { active, payload } = this.props;

    if (active && payload && payload.length) {
      return (
        <this.CustomTooltip className="custom-tooltip">
          <p>{payload[0].value} min</p>
        </this.CustomTooltip>
      );
    }
  
    return null;
  };
}

DurationTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default DurationTooltip;
