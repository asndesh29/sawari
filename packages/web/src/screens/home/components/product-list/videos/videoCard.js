/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Card } from '@blueprintjs/core';
import Iframe from 'react-iframe';

export default (obj, cardOnClickHandler) => {
  return (
    <div className="video-outer">
      <Iframe
        url={obj.videoId}
        width="100%"
        height="200px"
        allowFullScreen
        id="myId"
        className=""
        display="initial"
        position="relative"
      />
      <div className="text">
        <h3>Category</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing </h4>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
    </div>
  );
};
