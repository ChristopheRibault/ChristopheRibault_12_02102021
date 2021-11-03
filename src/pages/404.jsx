import { Component } from 'react';
import { withRouter } from 'react-router';
import style from 'styled-components';

class Error404 extends Component {
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

  render() {


    return (
      <this.StyledMain className='error-page'>
        <h1>Erreur 404</h1>
        <p>Cette page n'existe pas</p>
      </this.StyledMain>
    );
  }
}

export default withRouter(Error404);
