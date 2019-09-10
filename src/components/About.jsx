import React from 'react';

export default class About extends React.Component {

  render () {
    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p><strong>Hi I'm Jonathan Bridges</strong> and I'm a Software Developer. My interest in programming began at my last job. I could oftentimes resolve implementation issues for our clients using my knowledge of HTML5 and CSS3, but increasingly found myself unable to provide adequate solutions without the help of an Engineer. It bothered me being someone who could point out problems but couldn't come up with answers.</p>
                    <p>Recently I've been expanding my skillset with the aim of providing more value in my next role. Technologies I've been using include React/Redux, JavaScript, Ruby, Rails, PostgreSQL, MongoDB, Express, and Node. You can view my current and past projects below.</p>
                    <p>Personally, I love music. I‘ve studied audio technology and play several instruments. Growing up in Vermont, I relish being outdoors. I enjoy bicycling, hiking, camping, and snowboarding.</p> 
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className="services color-1">
                    <span className="icon2"><i className="icon-code" /></span>
                    <h3>Web</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-2">
                    <span className="icon2"><i className="icon-globe-outline" /></span>
                    <h3>DSA</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                  <div className="services color-3">
                    <span className="icon2"><i className="icon-data" /></span>
                    <h3>Backend</h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                  <div className="services color-4">
                    <span className="icon2"><i className="icon-phone3" /></span>
                    <h3>Mobile</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}