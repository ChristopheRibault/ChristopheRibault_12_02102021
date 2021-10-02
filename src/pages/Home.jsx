import { Component } from 'react';
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

  componentDidMount() {
    fetcher.get(18)
      .then(data => this.setState(data));
  }

  render() {
    return (
      <main className='home-page'>
        <Greetings name={this.state.data?.userInfos?.firstName} />
      </main>
    );
  }
}

export default Home;
