import React from 'react';
import { Icon, InputGroup, TextArea } from '@blueprintjs/core';
import Navbar from '../home/components/navbar';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Navbar />
        <div className="contact-us">
          <div className="main-content">
            <div className="left-part">
              <div className="logo-title">
                <Icon icon="phone" style={{ height: 15, width: 20, marginRight: 5 }} />
                <span>CALL US</span>
              </div>

              <div className="phoneNumber">
                <span id="pNumber">+977-9860723154</span>
                <span>(Mon to Sat 9:30 AM to 6 PM )</span>
              </div>

              <div className="email">
                <div className="logo-email">
                  <Icon icon="envelope" style={{ height: 20, width: 20, marginRight: 7 }} />
                  <span>E-MAIL</span>
                </div>
                <span id="email-id">sawarikinbech@gmail.com</span>
              </div>
            </div>
            <div className="right-part">
              <div className="right-title">
                <span>LET US CONTACT YOU</span>
              </div>
              <div className="enter-email">
                <InputGroup type="text" placeholder="Enter Name"/>
                <InputGroup type="text" placeholder="Enter Email"/>
              </div>

              <div className="city">
                <InputGroup type="text" placeholder="Enter Mobile Number"/>
                <InputGroup type="text" placeholder="Enter City"/>
              </div>

              <div className="discription">
                <TextArea id="textArea" type="text" placeholder="Please share your feedback what can we improve" />
              </div>
              <div className="submit">
                <div className="checkbox">
                  <input type="checkbox" />
                  <span>I agree to Terms and Conditions</span>
                </div>

                <div className="button">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cardekho-content">
            <div className="topic">
              <h2>Business with sawarikinbech</h2>
            </div>
            <div className="three-content">
              <div className="left-part">
                <div className="first">
                  <div className="logo-title">
                    <Icon icon="phone" style={{ height: 15, width: 20, marginRight: 5 }} />
                    <span>CALL US</span>
                  </div>

                  <div className="phoneNumber">
                    <span id="pNumber">+977-9860723154</span>
                    <span>(Mon to Sat 9:30 AM to 6 PM )</span>
                  </div>
                </div>
                <div className="second">
                  <div className="logo-email">
                    <Icon icon="envelope" style={{ height: 20, width: 20, marginRight: 7 }} />
                    <span>E-MAIL</span>
                  </div>
                  <span id="email-id">sawarikinbech@gmail.com</span>
                </div>

                {/* <div className="third">
                  <div className="dealer-logo">
                    <Icon icon="home" style={{ height: 20, width: 20, marginRight: 7}}/>
                    <span>DEALER SOLUTIONS</span>
                  </div>
                  <span id="dealer">Dealer Solutions</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
