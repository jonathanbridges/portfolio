import React from 'react';
import { Link, animateScroll as scroller } from 'react-scroll';

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuart'
    })
  }

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
                    <p><strong>Hi I'm Jonathan Bridges</strong> and I'm a Software Developer. My interest in programming began at my last job, where I could oftentimes resolve implementation issues for our clients using my knowledge of HTML5 and CSS3. However, I increasingly found myself unable to provide adequate solutions without the help of an Engineer. It bothered me being someone who could point out problems but couldn't come up with answers.</p>
                    <p>Recently I've been expanding my skillset with the aim of providing more value in my next role. Technologies I've been using include React/Redux, JavaScript, Ruby, Rails, PostgreSQL, MongoDB, Express, and Node. You can view my current and past projects <Link className="position" style={{}} activeClass="active" to="anchor" spy={true} smooth={true} duration={500}>below</Link>.</p>
                    <p>Personally, I love music. I‘ve studied audio technology and play several instruments. I grew up in Vermont, where I learned to love being outdoors. I enjoy bicycling, hiking, camping, and snowboarding.</p> 
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