import { Component } from 'react';
import { Header } from './layout';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
        </Router>
      </div>
    );
  }
}

export default App;
