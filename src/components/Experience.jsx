import React from 'react';

export default class Experience extends React.Component {
  render () {
    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Software Developer at <a href="https://www.brandly.com" target="_blank" rel="noopener noreferrer">Brandly</a> <span>2019-present</span></h2>
                      <p>At Brandly I have been refactoring CSS for mobile views across all marketing pages. I am also tackling bug fixes and frontend tests.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Customer Support Technical Lead at <a href="https://www.tintup.com" target="_blank" rel="noopener noreferrer">TINT</a> <span>2015-2018</span></h2>
                      <p>I had full autonomy over the client experience at TINT. When I wasn't assisting clients with web implementations of our software, I worked with Engineering closely, attending standups and meetings, reporting and tracking bugs in PivotalTracker, creating and running QA Tests, and creating API documentation.</p>
                      <p>I managed the conversion to Zendesk and implemented live chat, greatly reducing our response time and contact rate during the process.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Client Experience / Operations Associate at <a href="https://www.stitchfix.com" target="_blank" rel="noopener noreferrer">Stitch Fix</a> <span>2014-2015</span></h2>
                      <p>At Stitch Fix I wholly embraced a customer centric mindset, and made several improvements to CX processes on the operational level. I implemented a priority ticket structure in Zendesk, wrote Marketing approved copy for help desk replies, and trained new hires in Austin headquarters.</p>
                      <p>Other operational tasks involved disputing chargebacks, processing truant shipments, analyzing billing discrepancies, and reconciling accounts.</p>
                      <p>Out of a team that scaled from 20 to over 100 agents, I routinely led the CX team by total ticket solves, while retaining a 98% positive rating on tickets with client ratings.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Purchasing Specialist at <a href="https://www.firstrepublic.com" target="_blank" rel="noopener noreferrer">First Republic Bank</a> <span>2014-2015</span></h2>
                      <p>Working in First Republic's Purchasing Department, I ordered tangible assets for our corporate HQ and nationwide branches. I worked closely with our Facilities department, managing several vendors, and coordinating subcontractors. I also administered employee access for UPS CampusShip, Staples Advantage, GroupTrak and other online accounts.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Editor / Audio Engineer <a href="https://digifx.com" target="_blank" rel="noopener noreferrer">DigiFX</a> <span>2009-2010</span></h2>
                      <p>While at DigiFX I worked primarily on eLearning modules that were used as training materials in the nuclear industry. I proofed and revised scripts prior to recording sessions, recorded and edited audio, and performed voice overs.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Studio Assistant <a href="http://soundtrackgroup.com/" target="_blank" rel="noopener noreferrer">Soundtrack Boston</a> <span>2008-2009</span></h2>
                      <p>
                        Soundtrack Boston is the premier post-production facility in New England. While there I worked as a studio assistant, and provided coverage for the duplication room, machine room, client services, and wherever else I was needed.</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}