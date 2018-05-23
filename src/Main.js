import React from "react";
import { link } from 'react-router';

class Main extends React.Component{
  render() {
    return (
      <div>
        <h1>
          <link to="/">Reduxtagram</link>          
        </h1>
      </div>
    );
  }
}

export default Main;