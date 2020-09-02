import React from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './socialfollow';

export default () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="link">
              <h2>Quick Links</h2>
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="">Faqs</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="">Brands</Link></li>
                <li><Link to="">News</Link></li>
                <li><Link to="">Compare</Link></li>
                <li><Link to="">Sell on Sawarikinbech</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="link">
              <h2>Legal</h2>
              <ul>
                <li><Link to="">Privacy Policy</Link></li>
                <li><Link to="">Terms & Condition</Link></li>
                <li><Link to="">Return Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact">
              <h2>Contact</h2>
              <SocialFollow />
              <p>+977-1-343534</p>
              <p>support@sawarikinbech.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="link">
              <h2>Customer Service</h2>
              <ul>
                <li><Link to="">Customer Support</Link></li>
                <li><Link to="">How Does it Works</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="link">
              <h2>My Account</h2>
              <ul>
                <li><Link to="">Wishlist</Link></li>
                <li><Link to="">Inquiries</Link></li>
                <li><Link to="">Vehicles on Sales</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h2>Locate Us</h2>
            <p>Chakrapat 2, near Funpark Lagankhel, Lagalkhel Nepal</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.559409619125!2d85.30389271506122!3d27.669100082807706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb182e2d89b847%3A0x2c252f46175005d3!2sRing%20Road%202%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1596000811524!5m2!1sen!2snp" width="100%" height="150" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="container">
          <p>&copy; 2020 Sawari Kinbech. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
