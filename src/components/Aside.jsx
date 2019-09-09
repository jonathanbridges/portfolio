import React from 'react';
import Footer from './Footer';

export default class Aside extends React.Component {
  render () {
    return (
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
          <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
          <span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#" data-nav-section="home">Home</a></li>
              <li><a href="#" data-nav-section="about">About</a></li>
              <li><a href="#" data-nav-section="services">Services</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
              <li><a href="#" data-nav-section="work">Work</a></li>
              <li><a href="#" data-nav-section="blog">Blog</a></li>
              <li><a href="#" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <Footer />
      </aside>
    );
  }
}