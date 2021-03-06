import React from 'react';
import Social from './Social';

export default class Navbar extends React.Component {
  render () {
    return (
      <div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
              <li><a href="#about" data-nav-section="about">About</a></li>
              <li><a href="#skills" data-nav-section="skills">Skills</a></li>
              <li><a href="#work" data-nav-section="work">Projects</a></li>
              <li><a href="#experience" data-nav-section="experience">Experience</a></li>
              <li><a href="#contact" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <Social />
      </div>
    )
  }
}