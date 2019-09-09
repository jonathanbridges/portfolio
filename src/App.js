import React from 'react';
import Toggle from '../src/components/Toggle';
import Aside from '../src/components/Aside';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Experience from '../src/components/Experience';


class App extends React.Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Toggle />
          <Aside />
          <div id="colorlib-main">
            <Hero />
            <About />
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
