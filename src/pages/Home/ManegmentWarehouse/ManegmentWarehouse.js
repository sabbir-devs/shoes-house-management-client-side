import React from 'react';
import './ManegmentWarehouse.css';
import warehouseManegmentImg from '../../../images/shoes-hous.jpg'

const ManegmentWarehouse = () => {
    return (
        <div className='online-service'>
            <h1 style={{textAlign:'center', padding:'10px'}}>About Shoes House</h1>
            <div className="services">
            <div className="half-online-service">
                <div>
                <h1>Stock or inventory management in our Shoes House</h1>
                <p>Stock or stock inventory is the collection of all the materials and goods stored, whether for use to complete the production process or for sale to the customer. Efficient management of warehouse stock is a challenge for logistics companies or companies that have a warehouse or distribution centre since the management of the stock inventory stored will largely depend on the business’s profitability.</p>
                <button>See More</button>
                </div>
            </div>
            <div className="half-online-service">
                <img src={warehouseManegmentImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default ManegmentWarehouse;