import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ENDPOINT } from '../../../../config';

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   `${ENDPOINT}/slider/slider1.jpg`,
      //   `${ENDPOINT}/slider/slider2.jpg`,
      //   `${ENDPOINT}/slider/slider3.jpg`,
      //   `${ENDPOINT}/slider/slider4.jpg`,
      //   `${ENDPOINT}/slider/slider5.jpg`,
      // ],
      data: [
        'https://wallpaperaccess.com/download/1600x800-2684930',
        'https://wallpaperaccess.com/download/1600x800-2684977',
        'https://wallpaperaccess.com/download/1600x800-2684978'
      ]
    };
  }

  searchChange = (id, value) => {
    this.setState({ [id]: value });
  }

  render() {
    const { data } = this.state;
    return !data ? <div /> : (
      <div className="home-slider">
        <Carousel showStatus={false} infiniteLoop showThumbs={false} autoPlay transitionTime={500}>
          {data.map((img) => <div className="slider-image"><img src={img} /></div>)}
        </Carousel>
      </div>
    );
  }
}

export default SliderComponent;
