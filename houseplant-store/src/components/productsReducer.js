const initialState = {
    products: [], // Initialize products as an empty array
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default productsReducer;