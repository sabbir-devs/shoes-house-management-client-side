import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const id = useParams();
    const [shoes, setShoes] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/shoes/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setShoes(data))
    },[id])
    console.log(shoes)
    return (
        <div className='update-product'>
            <div className="product">
                <div className="product-half">
                    <img src={shoes.img} alt="" />
                    <h1>image section</h1>
                </div>
                <div className="product-half">
                    <h1>update section</h1>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;