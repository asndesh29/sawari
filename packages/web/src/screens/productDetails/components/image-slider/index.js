import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default (props) => {
    return (
        <Carousel>
            <div className="item">
                <img src={props.data} />
            </div>
            <div className="item">
                <img src={props.data} />
            </div>
            <div className="item">
                <img src={props.data} />
            </div>
            <div className="item">
                <img src={props.data} />
            </div>
        </Carousel>
    )
}