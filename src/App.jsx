import { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { 
  Community,
  Home,
  Profil,
  Settings,
} from './pages';
import Layout from './pages/Layout';

class App extends Component {

  render() {
    return (
      <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {/* TODO: Redirect to login page */}
            <Redirect exact to='/user/18' />
          </Route>
          <Route exact path='/user/:id'>
            <Layout component={Home} />
          </Route>
          <Route path='/user/:id/profil' component={Profil}>
            <Layout component={Profil} />
          </Route>
          <Route path='/user/:id/settings' component={Settings}>
            <Layout component={Settings} />
          </Route>
          <Route path='/user/:id/community' component={Community}>
            <Layout component={Community} />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
