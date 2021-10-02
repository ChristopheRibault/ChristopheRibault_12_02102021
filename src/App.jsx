import { Component } from 'react';
import { Header, Sidebar } from './layout';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Sidebar />
        </Router>
      </div>
    );
  }
}

export default App;
