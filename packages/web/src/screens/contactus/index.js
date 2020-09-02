import React from 'react';
import { Icon, InputGroup, TextArea } from '@blueprintjs/core';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Navbar />
        <div className="page-header">
          <div className="inner">
            <div className="container">
              <h3>Contact Us</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="contact-us">
            <div className="row">
              <div className="col-md-6">
                <div className="form">
                  <h2>Send us an Email</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <InputGroup type="text" placeholder="Enter Your Name" />
                  <InputGroup type="text" placeholder="Enter Your Email" />
                  <InputGroup type="text" placeholder="Enter Your Mobile Number" />
                  <InputGroup type="text" placeholder="Enter Your City" />
                  <TextArea id="textArea" type="text" placeholder="Please share your feedback what can we improve" />
                  <div className="checkbox">
                    <label><input type="checkbox" /> I agree to Terms and Conditions</label>
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </div>
              <div class="col-md-6">
                <div className="info">
                  <div className="item">
                    <div className="icon">
                      <Icon icon="map-marker" />
                    </div>
                    <div className="content">
                      <h3>Find Us</h3>
                      <p>Lagankhel 3, Lalitpur, Nepal - Near Bus Park</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <Icon icon="phone" />
                    </div>
                    <div className="content">
                      <h3>Call Us</h3>
                      <p>(Mon to Sat 9:30 AM to 6 PM )</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <Icon icon="map-marker" />
                    </div>
                    <div className="content">
                      <h3>Official E-MAIL</h3>
                      <p>sawarikinbech@gmail.com</p>
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
export default Index;
