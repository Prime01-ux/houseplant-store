import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import for accessing Redux state
import './Header.css'; // Importing the external CSS file

const Header = () => {
    // Access cartItems from Redux state
    const cartItems = useSelector((state) => state.cart.cartItems);

    // Calculate the total number of items in the cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            {/* Logo Section */}
            <div className="logo">Houseplant Store</div>

            {/* Navigation Section */}
            <nav className="navigation">
                <Link to="/products" className="nav-link">Product Listing</Link>
                <div className="cart-icon">
                    <Link to="/cart" className="nav-link">
                        🛒 <span>Cart ({totalItems})</span> {/* Updated to include the span */}
                    </Link>
                    {/* Total Items in Cart */}
                    <span className="cart-count">{totalItems}</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
