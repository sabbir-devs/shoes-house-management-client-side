import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { auth } from '../../../firebase.init';
import './AddItem.css';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItems = event => {
        event.preventDefault();
        const img = event.target.imgUrl.value;
        const name = event.target.name.value;
        const email = user.email;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const solld = event.target.sold.value;
        const seller = event.target.supplierName.value;
        const description = event.target.description.value;
        const newProduct = {img, name, email, price, quantity, solld, seller, description};

        fetch('https://mighty-shore-52159.herokuapp.com/shoes', {
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log('new added product', data)
            toast.success('Product add successful', {id:'toast2'})
            event.target.reset()
        })
        .catch((error) => {
            console.error('Error', error)
        })
    }
    return (
        <div className='add-item'>
            <div className="item-add-form">
                <form onSubmit={handleAddItems} className='form'>
                    <input className='adding-inputs' type="text" name="imgUrl" placeholder='Photo Url' id="" required/>
                    <input className='adding-inputs' type="text" name="name" placeholder='Product Name' id="" required/>
                    <input className='adding-inputs' type="email" name="email" placeholder={user.email} id="" readOnly/>
                    <input className='adding-inputs' type="number" name="price" placeholder='Price' id="" required/>
                    <input className='adding-inputs' type="number" name="quantity" placeholder='Quantity' id="" required/>
                    <input className='adding-inputs' type="number" name="sold" placeholder='Sold' id="" required/>
                    <input className='adding-inputs' type="text" name="supplierName" placeholder='Supplier Name' id="" required/>
                    <textarea className='adding-inputs' name="description" placeholder='Shor Description' id="" required></textarea>
                    <input className='add-btn' type="submit" value="Add" />
                </form>
            </div>
            
        </div>
    );
};

export default AddItem;