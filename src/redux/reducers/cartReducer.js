const initialState = {
    cartItems: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                // If item already exists, update the quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, index) =>
                        index === itemIndex
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    )
                };
            } else {
                // If item doesn't exist, add it to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;
