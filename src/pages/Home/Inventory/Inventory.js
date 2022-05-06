import React from 'react';
import './Inventory.css';

const shoes = [
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 5, suplier:'step hoker'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 25, suplier:'step hoker'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 45, suplier:'step hoker'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 35, suplier:'step hoker'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 25, suplier:'step hoker'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1aOK784vCCzvcN55BPSQYNaFEgDybKj2I8Yq-cHE2xuw0MIW0XOurQxDaSSHH__G2JM&usqp=CAU', name:'Nike Shoes', price:20, quantity: 35, suplier:'step hoker'}
]

const Inventory = () => {
    return (
        <div className='inventory'>
            <h1>inventory</h1>
            <div className="items">
            {shoes.map(shoe => (
                <div className='item'>
                    <img src={shoe.img} alt="" />
                    <h3>{shoe.name}</h3>
                    <h4>{shoe.price}</h4>
                    <p>Quantity: ${shoe.quantity}</p>
                    <p>Suplier: {shoe.suplier}</p>
                    <button>Update</button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Inventory;