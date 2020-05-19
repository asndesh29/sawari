import React from 'react';
import Navbar from '../home/components/navbar';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-us">
        <Navbar />
        <div className="about-us-body">
          <p>
            <h2>About SawariKinbech </h2>
          Sawarikinbech lists over more than 1000s of New and Used Car and Bike from across the brands.
          Pick any four of your interested car and Bike and compare them here. Comparison gives clearity on distinction between the choosen brand and model.
          <br />
          Moreover, Sawarikinbech connects to hundreds of sawari dealers across nepal.Visit the Sawari dealers in sawarikinbech page, select your city, province and districtwise.
          <br />
          Find the contact information as well as the location of your nearest dealer .
          <br />
          Our mission is to see delightness into car and bike buying and selling ownership.For achieving this, we aim to empower customers.To make informed about the products
          through our expert reviews, owner reviews, detailed specifications and comparisions before buying and selling them.
          </p>
        </div>
      </div>
    );
  }
}
export default AboutUs;
