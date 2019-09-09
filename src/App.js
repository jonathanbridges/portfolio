import React from 'react';
import Toggle from '../src/components/Toggle';
import Aside from '../src/components/Aside';
import Hero from '../src/components/Hero';


class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Toggle/>
          <Aside/>
          <div id="colorlib-main">
            <Hero/>
            <h1>This is working</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
