import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/actions/cartActions';
import './ProductListing.css'; // Import the CSS file

// Sample plant data
const plants = [
    { id: 1, name: 'Aloe Vera', price: 15, img: '/assets/aloe-vera.jpg', category: 'Succulents' },
    { id: 2, name: 'Snake Plant', price: 20, img: '/assets/snake-plant.jpg', category: 'Ferns' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 50, img: '/assets/fiddle-leaf-fig.jpg', category: 'Ferns' },
    { id: 4, name: 'Monstera', price: 25, img: '/assets/monstera.jpg', category: 'Tropical' },
    { id: 5, name: 'Pothos', price: 10, img: '/assets/pothos.jpg', category: 'Tropical' },
    { id: 6, name: 'Spider Plant', price: 12, img: '/assets/spider-plant.jpg', category: 'Succulents' },
];

// Plant categories
const categories = ['Succulents', 'Ferns', 'Tropical'];

const ProductListing = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems || []); // Ensure cartItems is an array
    const [disabled, setDisabled] = useState({});

    // Function to handle adding a plant to the cart
    const handleAddToCart = (plant) => {
        // Dispatch the action to add plant to the cart
        dispatch(addItemToCart({ ...plant, quantity: 1 }));
        // Disable the button for the specific plant after adding
        setDisabled((prevDisabled) => ({ ...prevDisabled, [plant.id]: true }));
    };

    // Calculate the total number of items in the cart
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="product-listing">
            <div className="header">
                <h1>Plant Store</h1>
                <span className="cart-info">🛒 Cart ({cartCount})</span>
            </div>

            {categories.map((category) => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="category-plants">
                        {plants
                            .filter((plant) => plant.category === category) // Filter plants by category
                            .map((plant) => (
                                <div key={plant.id} className="product-card">
                                    <img
                                        src={process.env.PUBLIC_URL + plant.img} // Fixed the image path
                                        alt={plant.name}
                                        className="product-thumbnail"
                                    />
                                    <h3>{plant.name}</h3>
                                    <p>${plant.price.toFixed(2)}</p>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={disabled[plant.id]} // Disable the button for added plants
                                    >
                                        {disabled[plant.id] ? 'Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
