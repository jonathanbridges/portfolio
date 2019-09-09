import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default class Aside extends React.Component {
  render () {
    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
          <h1 id="colorlib-logo"><a href="index.html">Jonathan Bridges</a></h1>
          <span className="position"><a href="#home" data-nav-section="home">Software Developer</a> in San Francisco</span>
        </div>
        <Navbar />
        <Footer />
      </aside>
    );
  }
}