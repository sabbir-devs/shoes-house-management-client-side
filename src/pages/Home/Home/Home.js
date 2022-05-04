import React from 'react';
import './Home.css';
import slider1 from '../../../images/slider1.jpeg'
import slider2 from '../../../images/slider2.jpeg';
import slider3 from '../../../images/slider3.jpeg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="top-banner">
                <div className="half-banner">
                    <h1>New Product</h1>
                    <h1>Cool Shoes</h1>
                    <button className='check-out'>Check it out</button>
                </div>
                <div className="half-banner sliders">
                    {/* <img src={slider1} alt="" /> */}
                    <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Home;