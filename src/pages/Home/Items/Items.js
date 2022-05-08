import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/updateProduct/${shoe._id}`}><button>Update</button></Link>
      </div>
  );
};

export default Items;