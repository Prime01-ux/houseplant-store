import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from '../redux/actions/cartActions';

const ShoppingCart = () => {
    // Correct access to cartItems in Redux state
    const cartItems = useSelector((state) => state.cart.cartItems); // Access cartItems from the correct path
    const dispatch = useDispatch();

    const calculateTotalCost = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.thumbnail} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>${item.price} x {item.quantity}</p>
                            <button onClick={() => dispatch(increaseItemQuantity(item.id))}>+</button>
                            <button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</button>
                            <button onClick={() => dispatch(removeItemFromCart(item.id))}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            {cartItems.length > 0 && <h3>Total: ${calculateTotalCost()}</h3>}
            <button>Checkout (Coming Soon)</button>
        </div>
    );
};

export default ShoppingCart;