import React from 'react';
import './OnlineService.css';
import onlineServiceImg from '../../../images/online-delivery.jpg'

const OnlineService = () => {
    return (
        <div className='online-service'>
            <h1 style={{textAlign:'center', padding:'10px'}}>Our Services</h1>
            <div className="services">
            <div className="half-online-service">
                <img src={onlineServiceImg} alt="" />
            </div>
            <div className="half-online-service">
                <div>
                <h1>Online Delivery</h1>
                <p>We take online product oder and we try to give our best service of you customer check you privacy policy</p>
                <button>Privacy Policy</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OnlineService;