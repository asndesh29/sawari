import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ENDPOINT } from '../../../../config';

class SliderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        'http://2.bp.blogspot.com/-1dyAYLa4Qo0/U8eZBQgD2PI/AAAAAAAAR2Y/xjdgzoWA35g/s1600/Best+Super+Car+Lamborghini.jpg',
        'http://2.bp.blogspot.com/-ynrCMjM8x-s/U8eZBAO9m3I/AAAAAAAAR2U/6ANd6ty4b-c/s1600/Car+HD+Wallpaper.jpg',
        'http://1.bp.blogspot.com/--NTeiBguKZw/U8eY_zTt4XI/AAAAAAAAR2M/yGoSe_Pqn3k/s1600/Fastes+Car++in+Th+World+2013.jpg',
        'http://1.bp.blogspot.com/-KUD91tRjAcs/U8eZDXn7LyI/AAAAAAAAR2k/sLnjHugD1CE/s1600/Maximum+Speed+HD+Widescreen+Wallpaper+2014.jpg',
        'http://1.bp.blogspot.com/-T-TL9DRYG2M/U8eZKo53b1I/AAAAAAAAR20/phJUnLJ4kQw/s1600/wallpapers.jpg'
      ],
    };
  }

  searchChange = (id, value) => {
    this.setState({ [id]: value });
  }

  render() {
    const { data } = this.state;
    return !data ? <div /> : (
      <div className="home-slider">
        <Carousel infiniteLoop showThumbs={false} autoPlay transitionTime={2000}>
          {data.map((img) => <div><img src={img} style={{ height: '70vh', width: '100%' }}/></div>)}
        </Carousel>
      </div>
    );
  }
}

export default SliderComponent;
