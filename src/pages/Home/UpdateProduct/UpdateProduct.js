import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://mighty-shore-52159.herokuapp.com/shoes/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id, product])
    // add quantity by form
    const addQuantity = event => {
        event.preventDefault()
        const proside = window.confirm('Are You Sure?');
        if(proside){
            const newQuantity = parseInt(event.target.addQuantity.value);
            const totalQuantity = parseInt(product.quantity) + newQuantity;
            const id = product._id;
            const totalSold = parseInt(product.solld);
            const update = {id, totalQuantity, totalSold}

            const url = `https://mighty-shore-52159.herokuapp.com/shoes/${id}`
            fetch(url,{
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(update),
            })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                toast.success('Stock update successful', {id:'toast2'})
            })
            .catch((error) => {
                console.error('Error', error)
            })
        }
    }
    const handleDeliveredItem = () => {
        if(product.quantity > 0){
            const totalQuantity = parseInt(product.quantity) - 1 ;
            const id = product._id;
            const totalSold = parseInt(product.solld) + 1;
            const update = { id, totalQuantity, totalSold};
            
            const url = `https://mighty-shore-52159.herokuapp.com/shoes/${id}`;
            fetch(url,{
                method: "PUT",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(update),
            })
            .then(res  => res.json())
            .then(data => {
                toast.success("Shoes Delivered Successful")
            })
            .catch((error) => {
                console.error('Error', error)
            })
        }
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
                    <button style={{marginTop:'10px'}} onClick={() => navigate('/manageitems')} className='quantity-submit'>Manage Items</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;