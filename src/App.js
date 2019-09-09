import React from 'react';
import Aside from '../src/components/Aside'

class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <Aside/>
            <h1>This is working</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
