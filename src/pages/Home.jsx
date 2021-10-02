import { Component } from 'react';
import style from 'styled-components';
import Greetings from '../components/Greetings';
import Fetcher from '../utils/fetcher';

const fetcher = new Fetcher();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  StyledMain = style.main`
    margin-left: 100px;
    padding: 3rem;
  `

  componentDidMount() {
    fetcher.get(18)
      .then(data => this.setState(data));
  }

  render() {
    return (
      <this.StyledMain className='home-page'>
        <Greetings name={this.state.data?.userInfos?.firstName} />
      </this.StyledMain>
    );
  }
}

export default Home;
