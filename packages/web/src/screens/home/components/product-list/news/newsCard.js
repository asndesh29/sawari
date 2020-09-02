import React from 'react';
import { Card, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ENDPOINT } from '../../../../../config';
import { format } from 'date-fns';
import Iframe from 'react-iframe';

export default (obj, cardOnClickHandler) => {
  return (
    <div interactive className="news-card col-md-6">
      <div className="news-container">

        <div className="image-container" style={{ backgroundImage: `url(${ENDPOINT}/images/${obj.image})` }}>
          {/* <img src={`${ENDPOINT}/images/${obj.image}`} /> */}

          <div className="caption">
            <h2>Cars</h2>
            <h3>{obj.header}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <Link to={`/news-details/${obj.slug}`} className="more">Read Article</Link>
          </div>
        </div>


        {/* <div dangerouslySetInnerHTML={{ __html: obj.content }} style={{ width: '100%', overflow: 'hidden', height: 100 }} /> */}
      </div>
    </div>
  );
};
