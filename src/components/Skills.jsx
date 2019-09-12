import React from 'react';

export default class Skills extends React.Component {
  render () {
    return (
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Skills</span>
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="row skills-mobile">
            <div className="col-md-12 animate-box skills" data-animate-effect="fadeInBottom">
              <span className="icon"><i className="devicon-ruby-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-rails-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-javascript-plain"></i></span>
              <span className="icon"><i className="devicon-react-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-html5-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-css3-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-postgresql-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-mongodb-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-express-original"></i></span>
              <span className="icon"><i className="devicon-nodejs-plain-wordmark"></i></span>
              <span className="icon"><i className="devicon-d3js-plain"></i></span>
              <span className="icon"><i className="devicon-amazonwebservices-plain-wordmark"></i></span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}