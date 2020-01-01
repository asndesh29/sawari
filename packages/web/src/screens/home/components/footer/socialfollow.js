import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default () => {
  return (
    <div style={{ marginTop: 10, marginLeft: 100 }}>
      <sapn>Follow us</sapn>
      <div style={{ display: 'flex', color: '#757575' }}>
        <FaFacebookF size={20} style={{ margin: 5, cursor: 'pointer' }} />
        <FaTwitter size={20} style={{ margin: 5, cursor: 'pointer' }} />
        <FaInstagram size={20} style={{ margin: 5, cursor: 'pointer' }} />
        <FaYoutube size={20} style={{ margin: 5, cursor: 'pointer' }} />
      </div>
    </div>
  );
}