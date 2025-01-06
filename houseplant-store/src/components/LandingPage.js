import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => (
    <div className="landing-page">
        <h1>Houseplant Shop</h1>
        <p>
            Welcome to Houseplant Shop! We specialize in providing beautiful, high-quality houseplants to bring life and freshness to your home.
        </p>
        <Link to="/products">
            <button className="get-started-btn">Get Started</button>
        </Link>
    </div>
);

export default LandingPage;