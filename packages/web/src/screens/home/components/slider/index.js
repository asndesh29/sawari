import React, { Component } from 'react';
import Slider from 'react-slick';
import { ENDPOINT } from '../../../../config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows: true,
    };
    return !data ? <div /> : (
      <div className="home-slider">
        <Slider
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...settings}
        >
          {
            data.map((obj, index) => {
              return (
                <div key={index} style={{ margin: 0, width: '80%', height: '80%'}}>
                  <img src={obj} alt="slide prospectus" style={{ width: '100%', height: '100%', margin: 0 }} />
                </div>
              );
            })
          }
        </Slider>
      </div>
    );
  }
}

export default SliderComponent;
