import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';  // Adjust the path if needed
import ProductListing from './components/ProductListing';  // Assuming you have this already
import Header from './components/Header';  // Header component
import LandingPage from './components/LandingPage';  // Landing page component

function App() {
  return (
    <Router>
      <Header /> {/* Include the Header on all pages */}

      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Product Listing Route */}
        <Route path="/products" element={<ProductListing />} />

        {/* Shopping Cart Route */}
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
