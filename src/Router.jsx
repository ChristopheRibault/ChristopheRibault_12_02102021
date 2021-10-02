import { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { Community, Home, Profil, Settings } from './pages';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {this.props.children}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profil' component={Profil}/>
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/community' component={Community}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
