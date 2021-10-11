import react from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';

class ActivityTooltip extends react.Component {

  CustomTooltip = style.div`
    background-color: #E60000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > * {
      margin: 0;
      padding: 1rem .8rem;
      font-size: .7em;
    }
  `;

  render() {
    const { active, payload } = this.props;

    if (active && payload && payload.length) {
      return (
        <this.CustomTooltip className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}Kcal`}</p>
        </this.CustomTooltip>
      );
    }
  
    return null;
  };
}

ActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default ActivityTooltip;
