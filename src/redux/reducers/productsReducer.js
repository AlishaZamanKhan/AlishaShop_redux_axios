import { ActionTypes } from "../constants/action-types";
const intialState = {
	products: [],
	cart: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };

		case ActionTypes.ADD_TO_CART:
			let existingCart = [...state.cart];
			existingCart.push(payload);
			return { ...state, cart: existingCart };

		case ActionTypes.REMOVE_FROM_CART:
			const id = payload;
			state.cart = state.cart.filter((item) => item.id !== id);
			return { ...state };
		default:
			return state;
	}
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
	console.log(type);
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};
