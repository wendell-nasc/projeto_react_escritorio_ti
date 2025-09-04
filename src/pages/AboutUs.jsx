import React from 'react';
import { NavLink } from 'react-router-dom';


function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>About Us</h6>
              <h4>Know Us Better</h4>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="naccs">
              <div className="tabs">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="active gradient-border"><span>Web Design</span></div>
                      <div className="gradient-border"><span>Graphics</span></div>
                      <div className="gradient-border"><span>Web Coding</span></div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <ul className="nacc">
                      <li className="active">
                        <div>
                          <div className="main-list">
                            <span className="title">Project Title</span>
                            <span className="title">Budget</span>
                            <span className="title">Deadline</span>
                            <span className="title">Client</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Website Redesign</span>
                            <span className="item">$1,500 to $2,200</span>
                            <span className="item">2022 Dec 12</span>
                            <span className="item">Web Biz</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Website Renovation</span>
                            <span className="item">$2,500 to $3,600</span>
                            <span className="item">2022 Dec 10</span>
                            <span className="item">Online Ads</span>
                          </div>
                          <div className="list-item">
                            <span className="item item-title">Marketing Plan</span>
                            <span className="item">$2,500 to $4,200</span>
                            <span className="item">2022 Dec 8</span>
                            <span className="item">Web Biz</span>
                          </div>
                          <div className="list-item last-item">
                            <span className="item item-title">All-new Website</span>
                            <span className="item">$3,000 to $6,600</span>
                            <span className="item">2022 Dec 2</span>
                            <span className="item">Web Presence</span>
                          </div>
                        </div>
                      </li>
                      {/* Você pode duplicar a estrutura acima para as outras tabs se desejar funcionalidade real */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-content">
              <h4>Please tell us about your idea and how you want it to be</h4>
              <p>
                You are allowed to use this template for your websites. You are <strong>NOT allowed</strong> to
                redistribute the template ZIP file on any other template websites.<br /><br />
                Thank you for downloading and using our templates. Please tell your friends about our website.
              </p>
              <div className="green-button">
                {/* <a href="about-us.html">Discover More</a> */}
                <NavLink to="/about-us">Discover More</NavLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
