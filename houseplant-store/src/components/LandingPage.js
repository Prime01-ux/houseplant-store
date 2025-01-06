import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to the Houseplant Store</h1>
        <p>Your one-stop shop for all your indoor greenery needs!</p>
        <button>
            <Link to="/products">Get Started</Link>
        </button>
    </div>
);

export default LandingPage;