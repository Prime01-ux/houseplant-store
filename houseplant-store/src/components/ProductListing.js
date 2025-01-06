import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/actions/cartActions';
import './ProductListing.css'; // Import the CSS file

const plants = [
    { id: 1, name: 'Aloe Vera', price: '$15', img: '/assets/aloe-vera.jpg', category: 'Succulents' },
    { id: 2, name: 'Snake Plant', price: '$20', img: '/assets/snake-plant.jpg', category: 'Ferns' },
    { id: 3, name: 'Fiddle Leaf Fig', price: '$50', img: '/assets/fiddle-leaf-fig.jpg', category: 'Ferns' },
    { id: 4, name: 'Monstera', price: '$25', img: '/assets/monstera.jpg', category: 'Tropical' },
    { id: 5, name: 'Pothos', price: '$10', img: '/assets/pothos.jpg', category: 'Tropical' },
    { id: 6, name: 'Spider Plant', price: '$12', img: '/assets/spider-plant.jpg', category: 'Succulents' },
];

const categories = ['Succulents', 'Ferns', 'Tropical'];

const ProductListing = () => {
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState({}); // Changed state to track disabled status for each product

    const handleAddToCart = (plant) => {
        dispatch(addItemToCart(plant)); // Dispatch the action to add plant to the cart
        setDisabled((prevDisabled) => ({ ...prevDisabled, [plant.id]: true })); // Disable the specific button
    };

    return (
        <div className="product-listing">
            {categories.map((category) => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="category-plants">
                        {plants
                            .filter((plant) => plant.category === category) // Filter plants by category
                            .map((plant) => (
                                <div key={plant.id} className="product-card">
                                    <img src={plant.img} alt={plant.name} className="product-thumbnail" />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.price}</p>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => handleAddToCart(plant)}
                                        disabled={disabled[plant.id]} // Disable the button only for the clicked plant
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