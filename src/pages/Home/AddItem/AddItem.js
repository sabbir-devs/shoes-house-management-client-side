import React from 'react';
import './AddItem.css';


const AddItem = () => {
    const handleAddItems = event => {
        event.preventDefault()
    }
    return (
        <div className='add-item'>
            <div className="item-add-form">
                <form onSubmit={handleAddItems} className='form'>
                    <input type="text" name="imgUrl" placeholder='Photo Url' id="" />
                    <input type="text" name="name" placeholder='name' id="" />
                    <input type="number" name="price" placeholder='Price' id="" />
                    <input type="number" name="quantity" placeholder='Quantity' id="" />
                    <input type="text" name="supplierName" placeholder='Supplier Name' id="" />
                    <textarea name="description" placeholder='Shor Description' id=""></textarea>
                </form>
            </div>
            
        </div>
    );
};

export default AddItem;