// Initial state for the cart
const initialState = {
    cartItems: [], // Array to store cart items
};

// The cartReducer function that manages the cart's state
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Handling the action of adding an item to the cart
        case 'ADD_TO_CART':
            const itemExists = state.cartItems.find(item => item.id === action.payload.id);
            if (itemExists) {
                // If the item already exists in the cart, update the quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // If the item is new, add it to the cart with a quantity of 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        // Handling the action of removing an item from the cart
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        // Handling the action of increasing the quantity of an item in the cart
        case 'INCREASE_ITEM_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        // Handling the action of decreasing the quantity of an item in the cart
        case 'DECREASE_ITEM_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        // Default case to return the state unchanged if the action type is not matched
        default:
            return state;
    }
};

export default cartReducer;