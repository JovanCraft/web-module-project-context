import { REMOVE_ITEM } from "../actions/cartActions";

const initialState = {
    cart: [],
}


 export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
};
