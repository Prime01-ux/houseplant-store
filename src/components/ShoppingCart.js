import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, deleteItemFromCart } from '../redux/actions/cartActions';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems); // Access the cartItems array from Redux
    const dispatch = useDispatch();

    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Calculate the total cost of items in the cart
    const totalCost = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

    // Handlers for cart actions
    const handleIncrease = (id) => dispatch(increaseItemQuantity(id));
    const handleDecrease = (id) => dispatch(decreaseItemQuantity(id));
    const handleDelete = (id) => dispatch(deleteItemFromCart(id));
    const handleCheckout = () => alert("Checkout Coming Soon!");
    const handleContinueShopping = () => window.location.href = '/products'; // Redirect to product listing page

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Shopping Cart</h1>

            {/* Total Items and Cost */}
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>

            {/* Cart Items */}
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                        <img 
                            src={item.thumbnail} 
                            alt={item.name} 
                            style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} 
                        />
                        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                            <h3>{item.name}</h3>
                            <p><strong>Unit Price:</strong> ${item.price}</p>
                            <p><strong>Quantity:</strong> {item.quantity}</p>

                            {/* Increase, Decrease, and Delete Buttons */}
                            <button onClick={() => handleIncrease(item.id)}>+</button>
                            <button 
                                onClick={() => handleDecrease(item.id)} 
                                disabled={item.quantity <= 1}
                                style={{ margin: '0 10px' }}
                            >
                                -
                            </button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty. Go back to the product listing page to add items.</p>
            )}

            {/* Checkout and Continue Shopping Buttons */}
            <div style={{ marginTop: '20px' }}>
                <button 
                    onClick={handleCheckout} 
                    style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer' }}
                >
                    Checkout
                </button>
                <button 
                    onClick={handleContinueShopping} 
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
