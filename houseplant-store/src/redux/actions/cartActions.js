export const addItemToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: { ...item, quantity: 1, addedToCart: true }, // Set `addedToCart` to true
});

export const removeItemFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId,
});

export const increaseItemQuantity = (itemId) => ({
    type: 'INCREASE_ITEM_QUANTITY',
    payload: itemId,
});

export const decreaseItemQuantity = (itemId) => ({
    type: 'DECREASE_ITEM_QUANTITY',
    payload: itemId,
});