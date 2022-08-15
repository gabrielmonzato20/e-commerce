import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cart.const.js";

export const carReducer = (
  state = { carItems: [], shippingAddress: {} },
  action
) => {
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
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
