import { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import style from 'styled-components';
import { Greetings } from '../components';
import { Charts } from '../layout';
import Fetcher from '../utils/fetcher';

const fetcher = new Fetcher();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: null,
    };
  }

  StyledMain = style.main`
    margin-left: 100px;
    padding: 2rem;
  `

  componentDidMount() {
    fetcher.get(this.props.match.params.id)
      .then(data => this.setState(data))
      .catch(error => this.setState({ error }));
  }

  render() {

    if (this.state.error) {
      return <Redirect to='/error404' />;
    }

    return (
      <this.StyledMain className='home-page'>
        <Greetings name={this.state.data?.userInfos?.firstName} />
        <Charts id={this.props.match.params.id} />
      </this.StyledMain>
    );
  }
}

export default withRouter(Home);
