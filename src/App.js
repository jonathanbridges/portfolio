import React from 'react';
import Toggle from '../src/components/Toggle';
import Aside from '../src/components/Aside';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Work from './components/Work';
import Experience from '../src/components/Experience';
import Contact from '../src/components/Contact';


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
            <Skills />
            <Work />
            <Experience />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
