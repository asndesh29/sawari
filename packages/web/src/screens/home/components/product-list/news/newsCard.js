import React from 'react';
import { Card, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ENDPOINT } from '../../../../../config';
import { format } from 'date-fns';
import Iframe from 'react-iframe';

export default (obj, cardOnClickHandler) => {
  return (
    <Card interactive className="news-card">
      <div className="news-container">
        <Link to={`/news-details/${obj.slug}`}>
          <div className="image-container">
            <img src={`${ENDPOINT}/images/${obj.image}`} />
          </div>
        </Link>
        <span id="header-span">{obj.header}</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          <AiOutlineCalendar color="red" />
          <span style={{ fontSize: 12, marginLeft: 5 }}>{format(obj.timeStamp, 'MMM DD')}</span>
        </div>
      </div>
    </Card>
  );
};
