// Add an item to the cart
export const addItemToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

// Remove an item from the cart
export const removeItemFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };
};

// Increase the quantity of an item in the cart
export const increaseItemQuantity = (id) => {
    return {
        type: 'INCREASE_ITEM_QUANTITY',
        payload: id,
    };
};

// Decrease the quantity of an item in the cart
export const decreaseItemQuantity = (id) => {
    return {
        type: 'DECREASE_ITEM_QUANTITY',
        payload: id,
    };
};

// Delete an item from the cart
export const deleteItemFromCart = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id,
    };
};
