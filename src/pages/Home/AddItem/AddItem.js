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
                    <input className='adding-inputs' type="text" name="imgUrl" placeholder='Photo Url' id="" />
                    <input className='adding-inputs' type="text" name="name" placeholder='name' id="" />
                    <input className='adding-inputs' type="number" name="price" placeholder='Price' id="" />
                    <input className='adding-inputs' type="number" name="quantity" placeholder='Quantity' id="" />
                    <input className='adding-inputs' type="text" name="supplierName" placeholder='Supplier Name' id="" />
                    <textarea className='adding-inputs' name="description" placeholder='Shor Description' id=""></textarea>
                    <input className='add-btn' type="submit" value="Add" />
                </form>
            </div>
            
        </div>
    );
};

export default AddItem;