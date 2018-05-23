import React,{ Component } from "react";
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Single from './Single';
import Photogrid from './Photogrid';


class Main extends Component{
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>
          <Link to="/view">Reduxtagram</Link>          
        </h1>
        <Route exact path={match.url} component={Photogrid}/>
        <Route path="/view" component={Single}/>
      </div>
    );
  }
}

export default Main;