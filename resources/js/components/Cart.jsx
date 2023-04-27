import React, { useState } from 'react';
import './Cart.css';
import { Modal } from 'react-bootstrap';
import CartItem from './CardItem';

const Cart = ({ cartItems, removeItem,show,setShow }) => {
 
  
    const handleClose = () => setShow(false);
 
  
    console.log(cartItems)
    function countTotal(){
        var total=0;
        for(var i=0;i<cartItems.length;i++){
            total+= parseInt(cartItems[i].price);
        }
        console.log("total"+total);
        return total;
    }
  
    return (
      <>
 
  
            <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems && cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} removeItem={removeItem} />
                    ))}
                    <p>Total: {countTotal()} RSD</p>
                </div>
                ) : (
                <p>Your cart is empty</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleClose}>Close</button>
            </Modal.Footer>
            </Modal>

      </>
    );
  };
  

export default Cart;
