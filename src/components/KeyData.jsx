import { Component } from 'react';
import Fetcher from '../utils/fetcher';
import icons from '../assets/icons';
import styled from 'styled-components';

const fetcher = new Fetcher();

class KeyData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  StyledList = styled.ul`
    grid-area: keydata;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 100%;
    margin: 0;
    padding: 0;
  `;

  StyledItem = styled.li`
    display: flex;
    flex-flow: row nowrap;
    gap: 1em;
  `;

  StyledData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  `;

  StyledQty = styled.p`
    font-size: 1.1em;
    font-weight: 700;
    margin: 0;
  `;

  StyledName = styled.p`
    font-size: .8em;
    color: #74798C;
    margin: 0;
  `;

  componentDidMount() {
    fetcher.get(this.props.id)
      .then(data => this.setState(data));
  }

  render() {
    const { keyData } = this.state.data;
    const data = [
      {
        icon: 'calories',
        data: 'calorieCount',
        unit: 'kCal',
        name: 'Calories',
      },
      {
        icon: 'protein',
        data: 'proteinCount',
        unit: 'g',
        name: 'Proteines',
      },
      {
        icon: 'carbs',
        data: 'carbohydrateCount',
        unit: 'g',
        name: 'Glucides',
      },
      {
        icon: 'fat',
        data: 'lipidCount',
        unit: 'g',
        name: 'Lipides',
      },
    ];
    return (
      <this.StyledList>
        {data.map(el => {
          return (
            <this.StyledItem>
              <img src={icons[el.icon]} alt='calories icon' />
              <this.StyledData>
                <this.StyledQty>{keyData?.[el.data]}{el.unit}</this.StyledQty>
                <this.StyledName>{el.name}</this.StyledName>
              </this.StyledData>
            </this.StyledItem>
          );
        })}
      </this.StyledList>
    );
  }
}

export default KeyData;