import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  </Router>
);

export default App;