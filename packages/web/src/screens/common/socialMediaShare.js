import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  InstapaperIcon,
  LinkedinIcon,
  InstapaperShareButton,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

export default ({ url }) => {
  return (
    <div className="social-madia-share">
      <span style={{ marginRight: 10 }}>Share:</span>
      <FacebookShareButton url={url} quote="Please Visit this site for buy and sell vehicle" style={{ margin: 5 }}>
        <FacebookIcon size={30} />
      </FacebookShareButton>
      <TwitterShareButton url={url} style={{ margin: 5 }}>
        <TwitterIcon size={30} />
      </TwitterShareButton>
      <LineShareButton url={url} style={{ margin: 5 }}>
        <LinkedinIcon size={30} />
      </LineShareButton>
      <InstapaperShareButton url={url} style={{ margin: 5 }}>
        <InstapaperIcon size={30} />
      </InstapaperShareButton>
      <EmailShareButton url={url} style={{ margin: 5 }}>
        <EmailIcon size={30} />
      </EmailShareButton>
    </div>
  );
};
