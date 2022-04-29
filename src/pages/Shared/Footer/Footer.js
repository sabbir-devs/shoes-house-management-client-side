import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; Copyright {new Date().getFullYear()}</p>  
        </div>
    );
};

export default Footer;