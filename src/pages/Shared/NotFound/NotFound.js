import React from 'react';
import './NotFound.css';
import errorBaner from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={errorBaner} alt="" />
        </div>
    );
};

export default NotFound;