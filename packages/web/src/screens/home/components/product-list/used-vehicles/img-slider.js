import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import img from '../../../../../assets/car.png';
import img2 from '../../../../../assets/car2.png';
// import img3 from '../../../../../assets/car3.png';

export default (props) => {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={false}
            interval={4000}
            showIndicators={false}
            className="used-slider"
        >
            <div>
                <img src={img} />
            </div>
            <div>
                <img src={img2} />
            </div>
            {/* <div>
                <img src={img3} />
            </div> */}

        </Carousel>
    );

};
