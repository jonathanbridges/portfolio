import React from 'react';

export default class Work extends React.Component {
  render () {
    return (
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="project" style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://twitter-geotrends.herokuapp.com">Twitter GeoTrends</a></h3>
                    <span>A data visualization of trending items on Twitter</span>
                    <span>d3, ExpressJS</span>
                    <p className="icon">
                      <span><a href="https://twitter-geotrends.herokuapp.com" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> Live</a></span>
                      <span><a href="https://github.com/jonathanbridges/twitter-geotrends" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Repo</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{ backgroundImage: 'url(images/img-2.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://click-camp.herokuapp.com" target="blank" rel="noopener noreferrer">ClickCamp</a></h3>
                    <span>A single-page web app inspired by HipCamp</span>
                    <span>Ruby on Rails, ReactJS, Redux, PostgreSQL, GoogleMaps API, Amazon S3</span>
                    <p className="icon">
                      <span><a href="https://click-camp.herokuapp.com" target="blank" rel="noopener noreferrer"><i className="icon-eye" /> Live</a></span>
                      <span><a href="https://github.com/jonathanbridges/click-camp" target="blank" rel="noopener noreferrer"><i className="icon-github" /> Repo</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
              <div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="https://spacey-aa.herokuapp.com" target="blank" rel="noopener noreferrer">Spacey</a></h3>
                    <span>A single-page website that aggregates space industry content</span>
                    <span>MongoDB, ExpressJS, ReactJS, Node</span>
                    <p className="icon">
                      <span><a href="https://spacey-aa.herokuapp.com" target="blank" rel="noopener noreferrer"><i className="icon-eye" /> Live</a></span>
                      <span><a href="https://github.com/jonathanbridges/spacey" target="blank" rel="noopener noreferrer"><i className="icon-heart" /> Repo</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
              <div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Work 04</a></h3>
                    <span>Application</span>
                    <p className="icon">
                      <span><a href="#"><i className="icon-share3" /></a></span>
                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Work 05</a></h3>
                    <span>Graphic, Logo</span>
                    <p className="icon">
                      <span><a href="#"><i className="icon-share3" /></a></span>
                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Work 06</a></h3>
                    <span>Web Design</span>
                    <p className="icon">
                      <span><a href="#"><i className="icon-share3" /></a></span>
                      <span><a href="#"><i className="icon-eye" /> 100</a></span>
                      <span><a href="#"><i className="icon-heart" /> 49</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-md-12 animate-box">
              <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
            </div>
          </div> */}
        </div>
      </section>
    )
  }
}