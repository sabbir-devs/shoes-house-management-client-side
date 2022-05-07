import React from 'react';
import './Items.css';

const Items = ({shoe}) => {
    return (
        <div className="item">
            <img src={shoe.img} alt="" />
            <h3>{shoe.name}</h3>
            <h4>${shoe.price}</h4>
            <p>Quantity: ${shoe.quantity}</p>
            <p>Suplier: {shoe.seller}</p>
            <p title={shoe.description}>
              Description: {shoe.description.slice(0, 130) + "..."}
            </p>
            <button>Update</button>
          </div>
    );
};

export default Items;