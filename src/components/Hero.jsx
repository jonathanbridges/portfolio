import React from 'react';

export default class Hero extends React.Component {

  render () {
    return (
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hi! <br />I'm Jonathan</h1>
                        <h2>Thanks for stopping by <span role="img" aria-label="smiley emoji">😃</span></h2>
                        <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/12wndBuWVkX4Hc6_BYDKZFoEdm8er5dSFmWjG1LzIlU0/edit" target="_blank" rel="noopener noreferrer" >View CV <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>I am <br />a Software Developer</h1>
                        <h2>I love building things</h2>
                        <p><a className="btn btn-primary btn-learn">View Portfolio  <i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}