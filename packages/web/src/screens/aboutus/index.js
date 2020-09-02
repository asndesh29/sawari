import React from 'react';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import Profile from '../../assets/profile-pic.jpg';
import Social from '../common/social';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-us">
        <div className="page_nav">
          <Navbar />
        </div>
        <div className="page-header">
          <div className="inner">
            <div className="container">
              <h3>About SawariKinbech</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="about-page">
            <div className="center-text">
              <p>Sawarikinbech lists over more than 1000s of New and Used Car and Bike from across the brands.          Pick any four of your interested car and Bike and compare them here. Comparison gives clearity on distinction between the choosen brand and model.</p>
              <p>Moreover, Sawarikinbech connects to hundreds of sawari dealers across nepal.Visit the Sawari dealers in sawarikinbech page, select your city, province and districtwise.</p>

              <p>Find the contact information as well as the location of your nearest dealer .</p>

              <p>Our mission is to see delightness into car and bike buying and selling ownership.For achieving this, we aim to empower customers.To make informed about the products</p>
              <p>through our expert reviews, owner reviews, detailed specifications and comparisions before buying and selling them.</p>

            </div>
            <div className="team">
              <div className="heading">
                <h2>Meet Our Team</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="item">
                    <div className="image">
                      <img src={Profile} alt="" />
                    </div>
                    <h4>Mike William<br /><span>Founder</span></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="item">
                    <div className="image">
                      <img src={Profile} alt="" />
                    </div>
                    <h4>Harry Wilson<br /><span>CEO / CO-FOUNDER</span></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="item">
                    <div className="image">
                      <img src={Profile} alt="" />
                    </div>
                    <h4>John Smith<br /><span>Human Resource</span></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="item">
                    <div className="image">
                      <img src={Profile} alt="" />
                    </div>
                    <h4>Michel William<br /><span>Logistic Manager</span></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="social">
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AboutUs;
