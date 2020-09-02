import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default () => {
    return (
        <div>
            <div className="social-uni">
                <a href="#"><FaFacebookF className="facebook" /></a>
                <a href="#"><FaTwitter className="twitter" /></a>
                <a href="#"><FaInstagram className="instagram" /></a>
            </div>
        </div>
    );
}