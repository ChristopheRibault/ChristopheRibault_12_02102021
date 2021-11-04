import { Component } from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import style from 'styled-components';
import { Greetings } from '../components';
import { Charts } from '../layout';
import Service from '../utils/service';

class Home extends Component {
  constructor(props) {
    super(props);
    this.service = new Service(props.match.params.id);
    this.state = {
      user: {},
      error: null,
    };
  }

  StyledMain = style.main`
    margin-left: 100px;
    padding: 2rem;
  `

  componentDidMount() {
    this.service.getUser()
      .then(user => this.setState({ user }))
      .catch(error => this.setState({ error }));
  }

  render() {

    if (this.state.error) {
      return <Redirect to='/error404' />;
    }

    return (
      <this.StyledMain className='home-page'>
        <Greetings name={this.state.user?.firstName} />
        <Charts id={this.props.match.params.id} />
      </this.StyledMain>
    );
  }
}

export default withRouter(Home);
