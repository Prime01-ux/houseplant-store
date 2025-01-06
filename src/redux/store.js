import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productsReducer'; // Import productsReducer
import cartReducer from './reducers/cartReducer'; // Import cartReducer

// Combine reducers to handle different pieces of the state
const rootReducer = combineReducers({
    products: productsReducer, // Ensure 'products' is handled by the productsReducer
    cart: cartReducer, // Your existing cart reducer
});

// Create the Redux store using the combined reducers
const store = createStore(rootReducer);

export default store;