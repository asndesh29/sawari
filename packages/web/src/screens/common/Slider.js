import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  searchChange = (id, value) => {
    this.setState({ [id]: value });
  }

  render() {
    const { data } = this.props;
    return !data ? <div /> : (
      <div className="home-slider">
        <Carousel infiniteLoop showThumbs={false} transitionTime={1000} showIndicators showStatus>
          {data.map((img) => <div><img src={img} style={{ height: '50vh', width: '100%' }} /></div>)}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
