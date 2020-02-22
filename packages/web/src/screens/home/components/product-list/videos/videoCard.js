/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Card } from '@blueprintjs/core';

export default (obj, cardOnClickHandler) => {
  return (
    <Card
      className="video-card"
      // onClick={() => cardOnClickHandler(obj)}
    >
      <div>
        <video
          width="100%"
          height="300"
          controls
          poster
          src="http://159.89.150.216:4003/review_video.mkv"
        />
        <div style={{ marginTop: 5, marginLeft: 10 }}>
          <span style={{ fontSize: 20 }}>{obj.header}</span>
          <br />
          <span style={{ color: '#757575', fontSize: 10 }}>{obj.date}</span>
          <br />
          <br />
          {/* <span style={{ color: '#757575'}}>{obj.content}</span> */}
        </div>
      </div>
    </Card>
  );
};
