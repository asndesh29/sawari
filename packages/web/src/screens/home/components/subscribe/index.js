import React from 'react';

export default () => {
    return (
        <div className="subscribe-wrapper">
            <div className="inner">
                <div className="container">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.</p>
                    <div className="form-box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867">
                            <path d="M460.8 68.267H17.067l221.867 182.75L463.309 68.779c-.821-.24-1.66-.411-2.509-.512z" />
                            <path d="M249.702 286.31a17.065 17.065 0 01-21.623 0L0 98.406v294.127c0 9.426 7.641 17.067 17.067 17.067H460.8c9.426 0 17.067-7.641 17.067-17.067V100.932L249.702 286.31z" />
                        </svg>
                        <input type="email" placeholder="Your Email..." />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}