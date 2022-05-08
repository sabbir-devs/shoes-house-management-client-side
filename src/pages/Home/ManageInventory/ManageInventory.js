import React, { useEffect, useState } from "react";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/shoes`)
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, [shoes]);
  const handleDeleteProduct = (id) => {
    const procide = window.confirm('Are you sure you want to delete')
    if(procide){
        console.log('delete items id', id);
        const url = `http://localhost:5000/shoes/${id}`
        fetch(url,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deleteCount > 0){
                console.log('delete successful');
                const remaining = shoes.filter(shoe => shoe._id !== id);
                setShoes(remaining)
            }
        })
    }
  }
  return (
    <div className="manage-inventory">
      {shoes.map((shoe) => (
        <div className="item" key={shoe._id}>
          <img src={shoe.img} alt="" />
          <h3>{shoe.name}</h3>
          <h4>${shoe.price}</h4>
          <p>Quantity: ${shoe.quantity}</p>
          <p>Suplier: {shoe.seller}</p>
          <p title={shoe.description}>
            Description: {shoe.description.slice(0, 130) + "..."}
          </p>
          <button onClick={() => handleDeleteProduct(shoe._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageInventory;
