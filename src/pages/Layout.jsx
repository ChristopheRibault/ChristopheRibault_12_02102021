import { Component } from 'react';
import { Header, Sidebar } from '../layout';

class Layout extends Component {

  render() {
    const { component : Comp } = this.props;

    return(
      <div>
        <Header />
        <Sidebar />
        <Comp />
      </div>
    );
  }
}

export default Layout;
