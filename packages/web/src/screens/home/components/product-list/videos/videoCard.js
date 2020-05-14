/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Card } from '@blueprintjs/core';
import Iframe from 'react-iframe';

export default (obj, cardOnClickHandler) => {
  return (
    <Iframe
      url={obj.videoId}
      width="450px"
      height="450px"
      allowFullScreen
      id="myId"
      className="video-card"
      display="initial"
      position="relative"
    />
  );
};
