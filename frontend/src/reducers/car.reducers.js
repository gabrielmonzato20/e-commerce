import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cart.const.js";

export const carReducer = (state = { carItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.carItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.carItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      }
      return {
        ...state,
        carItems: [...state.carItems, item],
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        carItems: state.carItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
