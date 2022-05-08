import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/shoes/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    // add quantity by form
    const addQuantity = event => {
        event.preventDefault()
        const proside = window.confirm('Are You Sure?');
        if(proside){
            const newQuantity = parseInt(event.target.addQuantity.value);
            const totalQuantity = parseInt(product.quantity) + newQuantity;
            console.log(totalQuantity);
            const id = product._id;
            const totalSold = parseInt(product.solld) + 0;
            const update = {id, totalQuantity, totalSold}

            const url = `http://localhost:5000/shoes/${id}`
            fetch(url,{
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(update),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast.success('Stock update successful', {id:'toast2'})
            })
        }
    }
    const handleDeliveredItem = () => {

    }
    return (
        <div className='update-product'>
            <div className="product">
                <div className="product-half">
                    <img src={product.img} alt="" />
                </div>
                <div className="product-half update-section">
                    <h3>{product.name}</h3>
                    <h4>Price: ${product.price}</h4>
                    <p>Quntity: {product.quantity}</p>
                    <p>Sold: {product.solld}</p>
                    <p>Suplier: {product.seller}</p>
                    <button className='delivered-btn' onClick={handleDeliveredItem}>Delivered</button>
                    <form onSubmit={addQuantity} className="quantity-form">
                        <input className='quantity-input' type="number" name="addQuantity" id="" />
                        <input className='quantity-submit' type="submit" value="Add Quantity" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;